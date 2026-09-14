#!/usr/bin/env python3
"""
Audits public/images and public/videos for anything large enough to slow the
site down, so a future maintainer can catch an oversized upload before it
ships. Run with: python scripts/check_assets.py
"""

import os
import sys

ROOT = os.path.join(os.path.dirname(__file__), "..", "public")
IMAGE_LIMIT_KB = 700
VIDEO_LIMIT_MB = 12

IMAGE_EXT = {".jpg", ".jpeg", ".png", ".webp"}
VIDEO_EXT = {".mp4", ".webm", ".mov"}


def human(size_bytes: float) -> str:
    if size_bytes >= 1024 * 1024:
        return f"{size_bytes / (1024 * 1024):.1f} MB"
    return f"{size_bytes / 1024:.0f} KB"


def main() -> int:
    warnings = []
    total_size = 0
    file_count = 0

    for dirpath, _dirnames, filenames in os.walk(ROOT):
        for name in filenames:
            ext = os.path.splitext(name)[1].lower()
            if ext not in IMAGE_EXT and ext not in VIDEO_EXT:
                continue
            path = os.path.join(dirpath, name)
            size = os.path.getsize(path)
            total_size += size
            file_count += 1
            rel = os.path.relpath(path, ROOT)

            if ext in IMAGE_EXT and size > IMAGE_LIMIT_KB * 1024:
                warnings.append(f"  {rel} — {human(size)} (over {IMAGE_LIMIT_KB} KB)")
            elif ext in VIDEO_EXT and size > VIDEO_LIMIT_MB * 1024 * 1024:
                warnings.append(f"  {rel} — {human(size)} (over {VIDEO_LIMIT_MB} MB)")

    print(f"Checked {file_count} media files in public/ ({human(total_size)} total).")
    if warnings:
        print(f"\n{len(warnings)} file(s) larger than recommended:")
        print("\n".join(warnings))
        print("\nConsider re-running scripts/process-images.js (images) or the ffmpeg")
        print("compression step (videos) on these before deploying.")
        return 1

    print("All media files are within the recommended size limits.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
