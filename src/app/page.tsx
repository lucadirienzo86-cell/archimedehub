import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Target,
  BarChart3,
  FileText,
  Layers,
  CheckCircle2,
  Play,
  MessageSquare,
  RefreshCw,
  Shield,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Processo Ripetibile",
    desc: "Prendi un progetto, estrai valore, trasformalo in contenuti, pubblica, misura, migliora.",
  },
  {
    icon: Layers,
    title: "Versione Adattabile",
    desc: "Clienti, progetti interni, brand personali, e-commerce, assicurazioni, software, associazioni, immobili, servizi.",
  },
  {
    icon: BarChart3,
    title: "KPI Misurabili",
    desc: "Views, lead, commenti, click, richieste, vendite. Ogni contenuto ha una funzione precisa.",
  },
  {
    icon: FileText,
    title: "SOP Universale",
    desc: "13 sezioni operative: dalla scheda progetto ai prompt riutilizzabili, dalla pubblicazione al report giornaliero.",
  },
  {
    icon: Shield,
    title: "Regola Anti-Fuffa",
    desc: "Se il contenuto non dice nulla di specifico, non pubblicarlo. Meglio un contenuto in meno che uno generico.",
  },
  {
    icon: Sparkles,
    title: "IA con Controllo",
    desc: "L'IA accelera, non sostituisce il giudizio. Controllo qualità umano obbligatorio e uso etico.",
  },
];

const steps = [
  { num: "01", title: "Scheda Progetto", desc: "Compila target, problema, offerta, CTA, KPI." },
  { num: "02", title: "Selezione Contenuto Madre", desc: "Video lungo, call, demo, documento — trova il punto forte." },
  { num: "03", title: "Creazione Short", desc: "Hook → Problema → Valore → CTA. Struttura da 30-45 secondi." },
  { num: "04", title: "Pubblicazione Multi-Canale", desc: "YouTube Shorts, Reels, TikTok, LinkedIn, X — adattato per ogni piattaforma." },
  { num: "05", title: "Report & Ottimizzazione", desc: "Ogni giorno: numeri, insight, azione concreta per il giorno dopo." },
];

const testimonials = [
  {
    quote: "Non stiamo creando post carini. Stiamo creando un processo ripetibile.",
    author: "Filosofia AI Classroom",
  },
  {
    quote: "Il pubblico perdona un video semplice, non un contenuto vuoto.",
    author: "Regola d'oro SOP",
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#0a0a0f] text-white">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        {/* gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/[0.07] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
          <div className="max-w-4xl mx-auto text-center">
            {/* badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium mb-8">
              <Zap className="w-3 h-3" />
              AI CLASSROOM — DI RIENZO SRL
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Trasforma qualsiasi
              <br />
              <span className="text-gradient">progetto in contenuti</span>
              <br />
              brevi e misurabili
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              Il sistema operativo per creare shorts, reels e video da qualsiasi
              materiale. SOP universale, tool di configurazione prompt, report
              giornaliero. Zero fuffa, solo processi ripetibili.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/prompt-shorts"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-red-600 rounded-xl text-white font-semibold text-base hover:opacity-90 transition-opacity"
              >
                Configura i tuoi Prompt
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/sop"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white/70 font-medium text-base border border-white/10 hover:bg-white/[0.04] transition-colors"
              >
                <FileText className="w-4 h-4" />
                Leggi la SOP
              </Link>
            </div>

            {/* trust bar */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-white/30">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500/60" />
                13 sezioni operative
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500/60" />
                Prompt riutilizzabili
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500/60" />
                Multi-canale
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500/60" />
                Report giornaliero
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CHI SIAMO ─── */}
      <section className="py-20 lg:py-28 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              Chi siamo
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Archimede<span className="text-gradient">Hub</span>
            </h2>
            <p className="mt-6 text-white/50 text-lg leading-relaxed">
              ArchimedeHub è una iniziativa di{" "}
              <strong className="text-white/80">DI RIENZO SRL</strong> — holding
              software house che opera nell'automazione AI, nello sviluppo di
              piattaforme digitali e nella gestione di processi aziendali
              attraverso agenti intelligenti.
            </p>
            <p className="mt-4 text-white/40 leading-relaxed">
              AI Classroom è il nostro sistema per aziende, professionisti e
              brand che vogliono trasformare qualsiasi contenuto in asset
              multimediali brevi — senza improvvisare, seguendo una SOP chiara e
              misurabile.
            </p>
          </div>
        </div>
      </section>

      {/* ─── COME FUNZIONA (PILLARS) ─── */}
      <section className="py-20 lg:py-28 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              Fondamenta
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
              I pilastri del sistema
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="card-glass p-6 lg:p-8 hover:border-amber-500/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <f.icon className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESSO IN 5 STEP ─── */}
      <section className="py-20 lg:py-28 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              Processo
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
              5 step. Da zero a pubblicazione.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <div key={s.num} className="relative card-glass p-6 text-center">
                <span className="text-3xl font-bold text-amber-500/20">
                  {s.num}
                </span>
                <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-xs text-white/40 leading-relaxed">
                  {s.desc}
                </p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-white/10">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CITAZIONI ─── */}
      <section className="py-20 lg:py-28 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="card-glass p-8">
                <MessageSquare className="w-6 h-6 text-amber-500/30 mb-4" />
                <p className="text-lg text-white/70 leading-relaxed italic">
                  "{t.quote}"
                </p>
                <p className="mt-4 text-xs text-white/30 font-medium">
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 lg:py-28 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card-glass p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.05] to-red-600/[0.05] pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Pronto a configurare
                <br />
                <span className="text-gradient">i tuoi contenuti?</span>
              </h2>
              <p className="mt-4 text-white/50 max-w-xl mx-auto">
                Usa il tool di configurazione prompt per generare la tua mini-SOP
                personalizzata. Compila la scheda progetto e ottieni prompt,
                hook, titoli e CTA pronti all'uso.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/prompt-shorts"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-red-600 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  <Play className="w-4 h-4" />
                  Inizia la Configurazione
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/sop"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white/70 font-medium border border-white/10 hover:bg-white/[0.04] transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  Si parte dalla SOP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
