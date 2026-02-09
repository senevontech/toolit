"use client";

import React, { useCallback } from "react";

export default function Dropzone({
  onFile,
  accept = "image/*",
}: {
  onFile: (file: File) => void;
  accept?: string;
}) {
  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const f = e.dataTransfer.files?.[0];
      if (f) onFile(f);
    },
    [onFile]
  );

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
      className="rounded-2xl border border-dashed p-6 text-center"
    >
      <div className="text-sm font-semibold">Drag & drop an image here</div>
      <div className="mt-1 text-xs text-neutral-500">or</div>

      <label className="mt-3 inline-flex cursor-pointer items-center justify-center rounded-xl border px-4 py-2 text-sm font-bold">
        Choose file
        <input
          type="file"
          accept={accept}
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) onFile(f);
          }}
        />
      </label>

      <div className="mt-2 text-xs text-neutral-500">Supports JPG/PNG/WebP</div>
    </div>
  );
}
