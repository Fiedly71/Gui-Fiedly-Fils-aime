"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface SkeletonImageProps extends Omit<ImageProps, "onLoad"> {
  skeletonClassName?: string;
}

export function SkeletonImage({
  className,
  skeletonClassName,
  alt,
  ...props
}: SkeletonImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div
          className={`absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-700 animate-skeleton ${skeletonClassName || ""}`}
        />
      )}
      <Image
        {...props}
        alt={alt}
        className={`${className || ""} transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
