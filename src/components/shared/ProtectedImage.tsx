"use client";

import Image, { type ImageProps } from "next/image";

type ProtectedImageProps = ImageProps & {
  wrapperClassName?: string;
  onImageClick?: () => void;
};

/**
 * Wraps next/image with a transparent click-catcher so a right-click lands on an
 * element with no image of its own (no "Save Image As" in the context menu), and
 * disables the native drag-to-save gesture. Not bulletproof against a determined
 * user (nothing on the web is), but stops casual right-click / drag saving.
 */
export default function ProtectedImage({
  wrapperClassName,
  className,
  alt,
  onImageClick,
  ...props
}: ProtectedImageProps) {
  return (
    <span className={`relative block h-full w-full select-none ${wrapperClassName ?? ""}`}>
      <Image
        {...props}
        alt={alt}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className={`pointer-events-none ${className ?? ""}`}
      />
      <span
        className={`absolute inset-0 z-10 ${onImageClick ? "cursor-pointer" : ""}`}
        onContextMenu={(e) => e.preventDefault()}
        onClick={onImageClick}
        role={onImageClick ? "button" : undefined}
        tabIndex={onImageClick ? 0 : undefined}
        onKeyDown={
          onImageClick
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") onImageClick();
              }
            : undefined
        }
        aria-hidden={!onImageClick}
      />
    </span>
  );
}
