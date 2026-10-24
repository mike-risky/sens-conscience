#!/usr/bin/env bash
# Auto-edit phone clips and/or photos into one vertical Reel (1080x1920, 9:16).
#
# Usage: make_reel.sh OUT.mp4 "Prénom Nom" "site.ch" MEDIA [MEDIA...]
#
# - Videos are cropped to 9:16, cut to at most CLIP_MAX seconds each.
# - Photos become PHOTO_SECONDS-second slow-zoom shots.
# - The total is capped at MAX_TOTAL seconds; quick cuts, no transitions to stall on.
# - Name is burned in for the first 3 s, website for the last 3 s.
# - Original sound is loudness-normalised; photos-only reels are silent
#   (add trending audio in the Instagram app when posting).
set -euo pipefail

CLIP_MAX=${CLIP_MAX:-6}
PHOTO_SECONDS=${PHOTO_SECONDS:-3}
MAX_TOTAL=${MAX_TOTAL:-30}
FONT=${FONT:-/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf}

[ $# -ge 4 ] || { sed -n '2,12p' "$0"; exit 1; }
out=$1 name=$2 site=$3
shift 3

work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT

scale='scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,setsar=1,fps=30'
i=0
for media in "$@"; do
  i=$((i + 1))
  seg="$work/seg$i.mp4"
  mime=$(file -b --mime-type "$media")
  if [[ $mime == image/* ]]; then
    frames=$((PHOTO_SECONDS * 30))
    ffmpeg -nostdin -loglevel error -loop 1 -i "$media" -f lavfi -i anullsrc=r=48000:cl=stereo \
      -t "$PHOTO_SECONDS" -filter_complex \
      "[0:v]scale=2160:3840:force_original_aspect_ratio=increase,crop=2160:3840,zoompan=z='min(zoom+0.0015,1.15)':d=$frames:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30,setsar=1,format=yuv420p[v]" \
      -map '[v]' -map 1:a -c:v libx264 -preset veryfast -crf 20 -c:a aac -shortest "$seg"
  else
    has_audio=$(ffprobe -v error -select_streams a -show_entries stream=index -of csv=p=0 "$media" | head -1)
    if [ -n "$has_audio" ]; then
      ffmpeg -nostdin -loglevel error -i "$media" -t "$CLIP_MAX" \
        -vf "$scale,format=yuv420p" -af "aresample=48000,aformat=channel_layouts=stereo" \
        -c:v libx264 -preset veryfast -crf 20 -c:a aac "$seg"
    else
      ffmpeg -nostdin -loglevel error -i "$media" -f lavfi -i anullsrc=r=48000:cl=stereo -t "$CLIP_MAX" \
        -vf "$scale,format=yuv420p" -map 0:v -map 1:a \
        -c:v libx264 -preset veryfast -crf 20 -c:a aac -shortest "$seg"
    fi
  fi
  echo "file '$seg'" >> "$work/list.txt"
done

ffmpeg -nostdin -loglevel error -f concat -safe 0 -i "$work/list.txt" -c copy "$work/joined.mp4"
total=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$work/joined.mp4")
total=$(python3 -c "print(min(float('$total'), $MAX_TOTAL))")
end_start=$(python3 -c "print(max(0, $total - 3))")

# drawtext needs ':' and '\'' escaped; write the text to files to sidestep quoting.
printf '%s' "$name" > "$work/name.txt"
printf '%s' "$site" > "$work/site.txt"
# Shrink long text so it stays inside the 1080 px frame (drawtext does not wrap).
fit() { python3 -c "import sys; print(min($1, int(1700 / max(1, len(open(sys.argv[1], encoding='utf-8').read())))))" "$2"; }
name_size=$(fit 64 "$work/name.txt")
site_size=$(fit 56 "$work/site.txt")
box="expansion=none:box=1:boxcolor=0x2B2824@0.55:boxborderw=24:fontcolor=white:fontfile=$FONT"
ffmpeg -nostdin -loglevel error -y -i "$work/joined.mp4" -t "$total" \
  -vf "drawtext=textfile=$work/name.txt:$box:fontsize=$name_size:x=(w-text_w)/2:y=h*0.72:enable='lt(t,3)',drawtext=textfile=$work/site.txt:$box:fontsize=$site_size:x=(w-text_w)/2:y=h*0.72:enable='gte(t,$end_start)'" \
  -af loudnorm=I=-14:TP=-1.5:LRA=11 \
  -c:v libx264 -preset medium -crf 20 -pix_fmt yuv420p -c:a aac -b:a 160k -movflags +faststart "$out"

echo "$out (${total}s)"
