import Image from "next/image";

interface ProjectMediaProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function isVideo(src: string) {
  return /\.(mp4|webm|ogg)$/i.test(src);
}

export function withBasePath(src: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  if (!basePath || !src.startsWith("/") || src.startsWith(`${basePath}/`)) {
    return src;
  }

  return `${basePath}${src}`;
}

export function ProjectMedia({
  src,
  alt,
  className = "object-cover",
  sizes = "(max-width: 768px) 100vw, 80vw",
  priority = false,
}: ProjectMediaProps) {
  const assetSrc = withBasePath(src);

  if (isVideo(src)) {
    return (
      <video
        className={`h-full w-full ${className}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
      >
        <source src={assetSrc} type="video/mp4" />
      </video>
    );
  }

  return (
    <Image
      src={assetSrc}
      alt={alt}
      fill
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
}
