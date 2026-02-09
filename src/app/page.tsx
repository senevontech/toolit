// import Link from "next/link";
// import LogoWithFallback from "@/components/tools/LogoFallback";


// export const metadata = {
//   title: "TOOLIT — Online Tools System",
//   description:
//     "Fast online tools for images. Compress, convert, resize — privacy-friendly and SEO-ready.",
// };

// export default function HomePage() {
//   return (
//     <main className="home-bg min-h-screen">
//       {/* Soft overlay for readability */}
//       <div className="min-h-screen bg-black/10">
//         {/* Top-left brand */}
//         <header className="px-10 pt-10">
//           <div className="leading-tight">
//             <h1 className="text-4xl font-black tracking-tight text-orange-500">
//               TOOLIT
//             </h1>
//             <p className="mt-1 text-lg text-orange-500/90">
//               Online Tools system
//             </p>
//           </div>

//           {/* Optional nav */}
//           <div className="mt-6 flex gap-3">
//             <Link
//               href="/tools"
//               className="rounded-xl bg-black/20 px-4 py-2 text-sm font-bold text-black ring-1 ring-black/10 hover:bg-black/25 transition"
//             >
//               Browse Tools
//             </Link>
//             <Link
//               href="/tools/image-compressor"
//               className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-black text-white hover:bg-orange-600 transition"
//             >
//               Image Compressor
//             </Link>
//           </div>
//         </header>

//         {/* Center logo/card */}
//         <section className="flex min-h-[70vh] items-center justify-center px-6">
//           <div className="rounded-3xl bg-white/60 backdrop-blur-md ring-1 ring-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.20)] p-8">
//             <div className="flex flex-col items-center gap-4">
//               <div className="rounded-2xl bg-white shadow-[0_18px_40px_rgba(0,0,0,0.25)] p-5 ring-1 ring-black/10">
//                 {/* Put your logo in public/logo.png if you want, else keep placeholder */}
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                <LogoWithFallback />

//                 <div className="text-center text-sm font-black text-orange-600">
//                   TOOLIT
//                 </div>
//               </div>

//               <div className="text-center">
//                 <div className="text-xl font-black text-black/80">
//                   Image Tools — Phase 1
//                 </div>
//                 <p className="mt-1 text-sm text-black/60">
//                   Compress images instantly in your browser.
//                 </p>
//               </div>

//               <div className="flex gap-3">
//                 <Link
//                   href="/tools/image-compressor"
//                   className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-black text-white hover:bg-orange-600 transition"
//                 >
//                   Start Compressing
//                 </Link>
//                 <Link
//                   href="/tools"
//                   className="rounded-xl bg-black/15 px-5 py-2.5 text-sm font-bold text-black/80 ring-1 ring-black/10 hover:bg-black/20 transition"
//                 >
//                   View Tools
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="px-10 pb-8 text-xs text-black/50">
//           © {new Date().getFullYear()} TOOLIT • Built for speed + SEO
//         </footer>
//       </div>
//     </main>
//   );
// }






import ToolitLandingHero from "@/components/ui/hero-bg";

export default function HomePage() {
  return <ToolitLandingHero />;
}

