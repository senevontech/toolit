"use client";

import React, { useMemo, useState } from "react";
import Dropzone from "./Dropzone";

function bytesToSize(bytes: number) {
  const sizes = ["B", "KB", "MB", "GB"];
  if (!bytes) return "0 B";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const v = bytes / Math.pow(1024, i);
  return `${v.toFixed(v >= 10 || i === 0 ? 0 : 1)} ${sizes[i]}`;
}

async function readAsDataURL(file: File) {
  return await new Promise<string>((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result));
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}

async function imageToCompressedBlob(
  file: File,
  quality: number,
  outType: "image/jpeg" | "image/webp"
) {
  const dataUrl = await readAsDataURL(file);

  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const i = new Image();
    i.onload = () => resolve(i);
    i.onerror = reject;
    i.src = dataUrl;
  });

  const canvas = document.createElement("canvas");
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas not supported");
  ctx.drawImage(img, 0, 0);

  const blob = await new Promise<Blob | null>((resolve) => {
    canvas.toBlob((b) => resolve(b), outType, quality);
  });

  if (!blob) throw new Error("Failed to compress image");
  return blob;
}

export default function ImageCompressorClient() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [quality, setQuality] = useState(0.75);
  const [format, setFormat] = useState<"image/jpeg" | "image/webp">("image/jpeg");

  const [busy, setBusy] = useState(false);
  const [outBlob, setOutBlob] = useState<Blob | null>(null);

  const savings = useMemo(() => {
    if (!file || !outBlob) return null;
    const diff = file.size - outBlob.size;
    const pct = (diff / file.size) * 100;
    return { diff, pct };
  }, [file, outBlob]);

  async function onPick(f: File) {
    setFile(f);
    setOutBlob(null);
    setPreview(await readAsDataURL(f));
  }

  async function compressNow() {
    if (!file) return;
    setBusy(true);
    try {
      const blob = await imageToCompressedBlob(file, quality, format);
      setOutBlob(blob);
    } finally {
      setBusy(false);
    }
  }

  function download() {
    if (!outBlob || !file) return;
    const ext = format === "image/webp" ? "webp" : "jpg";
    const base = file.name.replace(/\.[^/.]+$/, "");
    const url = URL.createObjectURL(outBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${base}-compressed.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-6">
      {!file ? (
        <Dropzone onFile={onPick} />
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <div className="overflow-hidden rounded-2xl border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={preview} alt="Preview" className="h-auto w-full" />
            </div>

            <div className="text-xs text-neutral-600">
              <b>Original:</b> {bytesToSize(file.size)}
              {outBlob ? (
                <>
                  {" "}• <b>Compressed:</b> {bytesToSize(outBlob.size)}
                  {" "}• <b>Saved:</b> {bytesToSize(savings?.diff ?? 0)} (
                  {(savings?.pct ?? 0).toFixed(1)}%)
                </>
              ) : null}
            </div>

            <button
              onClick={() => {
                setFile(null);
                setPreview("");
                setOutBlob(null);
              }}
              className="text-sm text-neutral-600 underline"
            >
              Choose another image
            </button>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border p-4">
              <div className="text-sm font-black">Settings</div>

              <div className="mt-4 space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-600">
                    <span>Quality</span>
                    <span>{Math.round(quality * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min={0.2}
                    max={0.95}
                    step={0.05}
                    value={quality}
                    onChange={(e) => setQuality(Number(e.target.value))}
                    className="mt-2 w-full"
                  />
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs text-neutral-600">Output format</div>
                  <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value as any)}
                    className="rounded-xl border px-3 py-2 text-sm"
                  >
                    <option value="image/jpeg">JPG</option>
                    <option value="image/webp">WebP</option>
                  </select>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={compressNow}
                    disabled={busy}
                    className="flex-1 rounded-xl border px-4 py-2 text-sm font-black disabled:opacity-60"
                  >
                    {busy ? "Compressing..." : "Compress"}
                  </button>
                  <button
                    onClick={download}
                    disabled={!outBlob}
                    className="flex-1 rounded-xl border px-4 py-2 text-sm font-black disabled:opacity-60"
                  >
                    Download
                  </button>
                </div>

                <div className="text-xs text-neutral-500">
                  Tip: WebP usually gives smaller size than JPG.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
