import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-white/80">
              AI Classroom — ArchimedeHub
            </p>
            <p className="text-xs text-white/40 mt-1">
              Sistema operativo per contenuti brevi
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <span>© {new Date().getFullYear()} DI RIENZO SRL</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">P.IVA IT — Tutti i diritti riservati</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
