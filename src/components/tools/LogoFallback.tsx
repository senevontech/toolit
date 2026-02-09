"use client";

export default function LogoWithFallback() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="TOOLIT"
      className="mx-auto h-16 w-24 object-contain"
      onError={(e) => {
        e.currentTarget.src = "/logo-fallback.svg";
      }}
    />
  );
}
