"use client";

import { useState } from "react";

interface FoodImageProps {
  src: string;
  alt: string;
  emoji: string;
  className?: string;
  sizes?: string;
}

/**
 * Imagem com fallback: se a foto da internet não carregar,
 * mostra um placeholder com gradiente da marca e o emoji do item.
 */
export function FoodImage({ src, alt, emoji, className = "" }: FoodImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-wine via-plum to-teal ${className}`}
        aria-label={alt}
        role="img"
      >
        <span className="text-6xl drop-shadow-lg">{emoji}</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
