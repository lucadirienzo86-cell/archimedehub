"use client";

import { useState } from "react";
import {
  Sparkles,
  Copy,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Wand2,
  Target,
  MessageSquare,
  Hash,
  Megaphone,
  Layers,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  projectName: string;
  target: string;
  offer: string;
  objective: string;
  tone: string;
  channels: string[];
  problem: string;
  proof: string;
  cta: string;
  materials: string;
}

const steps = [
  { id: 0, title: "Progetto", icon: Target, desc: "Nome e target" },
  { id: 1, title: "Obiettivo", icon: Megaphone, desc: "Cosa vuoi ottenere" },
  { id: 2, title: "Contenuto", icon: Layers, desc: "Materiali e angolo" },
  { id: 3, title: "Genera", icon: Sparkles, desc: "Prompt pronti" },
];

const objectives = [
  { value: "lead", label: "Lead / Contatti", icon: "📩" },
  { value: "vendite", label: "Vendite dirette", icon: "💰" },
  { value: "traffico", label: "Traffico al sito", icon: "🔗" },
  { value: "autorita", label: "Autorevolezza", icon: "🏆" },
  { value: "community", label: "Community", icon: "👥" },
  { value: "recruiting", label: "Recruiting", icon: "🤝" },
];

const tones = [
  { value: "professionale", label: "Professionale", desc: "Diretto, chiaro, credibile" },
  { value: "educativo", label: "Educativo", desc: "Insegnare, spiegare, guidare" },
  { value: "provocatorio", label: "Provocatorio", dest: "Sfidare, far reagire" },
  { value: "premium", label: "Premium", desc: "Elegante, raffinato, esclusivo" },
  { value: "diretto", label: "Diretto", desc: "Senza frasi, al punto" },
  { value: "emozionale", label: "Emozionale", desc: "Toccare, coinvolgere, ispirare" },
];

const channelOptions = [
  { value: "youtube", label: "YouTube Shorts", icon: "📺" },
  { value: "instagram", label: "Instagram Reels", icon: "📸" },
  { value: "tiktok", label: "TikTok", icon: "🎵" },
  { value: "linkedin", label: "LinkedIn", icon: "💼" },
  { value: "x", label: "X (Twitter)", icon: "🐦" },
];

const materialOptions = [
  "Video lunghi",
  "Call clienti",
  "Screenshot demo",
  "Foto prodotto",
  "Documenti PDF",
  "Lezioni / corsi",
  "Testimonianze",
  "Eventi dal vivo",
];

function CopyButton({ text, label = "Copia" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
        copied
          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
          : "bg-white/[0.04] text-white/40 hover:text-white/70 border border-white/[0.08] hover:bg-white/[0.08]"
      )}
    >
      {copied ? <CheckCircle2 className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
      {copied ? "Copiato!" : label}
    </button>
  );
}

function generateOutput(data: FormData) {
  const objectiveMap: Record<string, string> = {
    lead: "generare lead qualificati (contatti, DM, commenti con intenzione)",
    vendite: "vendere direttamente il prodotto/servizio",
    traffico: "portare traffico al sito o alla landing page",
    autorita: "costruire autorevolezza e posizionamento come esperto",
    community: "far crescere la community e l'engagement",
    recruiting: "reclutare collaboratori o venditori",
  };

  const toneMap: Record<string, string> = {
    professionale: "Professionale, credibile, diretto. Niente enfasi vuota.",
    educativo: "Spiegativo, chiaro, utile. Insegnare qualcosa di concreto.",
    provocatorio: "Sfidante, diretto, che fa reagire. Senza essere offensivo.",
    premium: "Elegante, raffinato, esclusivo. Linguaggio curato.",
    diretto: "Al punto, senza giri di parole. Frasi corte e incisive.",
    emozionale: "Cogliente, coinvolgente, che tocca le emozioni.",
  };

  const channelMap: Record<string, string> = {
    youtube: "YouTube Shorts (max 59 sec, titolo forte, descrizione breve)",
    instagram: "Instagram Reels (visual curato, hashtag specifici)",
    tiktok: "TikTok (hook aggressivo, caption breve)",
    linkedIn: "LinkedIn (tono professionale, dati e casi studio)",
    x: "X / Twitter (curiosità + promessa concreta)",
  };

  const selectedChannels = data.channels.map((c) => channelMap[c]).join("\n- ");

  // 1. Mini SOP
  const miniSOP = `MINI SOP — ${data.projectName.toUpperCase()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TARGET: ${data.target}
OBIETTIVO: ${objectiveMap[data.objective] || data.objective}
TONO: ${toneMap[data.tone] || data.tone}
CANALE: ${selectedChannels}
PROBLEMA FORTE: ${data.problem}
PROVA CONCRETA: ${data.proof}
CTA: ${data.cta}
MATERIALI: ${data.materials}

STRUTTURA VIDEO (30-45 sec):
┌─────────────────────────────────────┐
│ 0-3 sec  │ HOOK: Fermare lo scroll  │
│ 3-8 sec  │ PROBLEMA: Far riconoscere│
│          │ il dolore                │
│ 8-35 sec │ VALORE: Soluzione        │
│          │ concreta                 │
│ Finale   │ CTA: ${data.cta}        │
└─────────────────────────────────────┘

REPORT GIORNALIERO:
- Contenuti creati: [numero]
- Views: [numero]
- Hook che ha funzionato: [quale]
- Azione per domani: [cosa migliorare]`;

  // 2. 10 Hook
  const hooks = `10 HOOK FORTI — ${data.projectName}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. "${data.problem} — Ecco cosa succede se non lo risolvi."
2. "La maggior parte di ${data.target} sbaglia questa cosa."
3. "Ho visto ${data.target} perdere tempo/money per questo motivo."
4. "Se ${data.problem}, devi assolutamente vedere questo."
5. "Il consiglio che avrei voluto ricevere su ${data.projectName}."
6. "Perché ${data.target} non ottiene risultati? Ecco la verità."
7. "Questo errore costa caro a ${data.target}."
8. "Come ho risolto ${data.problem} in [tempo/risultato]."
9. "La cosa che nessuno ti dice su ${data.projectName}."
10. "Se vuoi ${objectiveMap[data.objective]}, fai prima questo."`;

  // 3. 10 Titoli
  const titoli = `10 TITOLI BENEFIT-DRIVEN — ${data.projectName}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROVOCATORI:
1. "L'errore che ${data.target} continua a ripetere"
2. "Perché il tuo approccio a ${data.projectName} non funziona"

EDUCATIVI:
3. "Come risolvere ${data.problem} in pochi passi"
4. "Il metodo per ottenere ${objectiveMap[data.objective]}"

TUTORIAL:
5. "Fai così: ${data.projectName} passo dopo passo"
6. "La tecnica che uso per ${objectiveMap[data.objective]}"

PREMIUM:
7. "${data.projectName}: la strategia completa"
8. "Il sistema che trasforma ${data.target} in risultati"

GENERALI:
9. "Cosa succede quando applichi questo su ${data.projectName}"
10. "La guida essenziale su ${data.projectName} per ${data.target}"`;

  // 4. 5 CTA
  const ctas = `5 CTA COERENTI — ${data.projectName}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. "Commenta ${data.cta.toUpperCase()} e ti mando i dettagli."
2. "Scrivi '${data.cta.toUpperCase()}' in DM e ti spiego come fare."
3. "Vuoi ${objectiveMap[data.objective]}? Commenta e ti guido."
4. "Salva questo video e commenta ${data.cta.toUpperCase()} quando sei pronto."
5. "Condividi con chi ha bisogno di ${objectiveMap[data.objective]}."`;

  // 5. Prompt Madre
  const promptMadre = `PROMPT MADRE — ${data.projectName.toUpperCase()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Agisci come strategist, editor e project manager dei contenuti brevi.
Prendi il progetto seguente: ${data.projectName}.
Target: ${data.target}.
Offerta: ${data.offer}.
Obiettivo: ${objectiveMap[data.objective]}.
Tono: ${toneMap[data.tone]}.
Materiali disponibili: ${data.materials}.
Problema forte: ${data.problem}.
Prova concreta: ${data.proof}.

Crea una mini SOP operativa per produrre contenuti brevi.
Includi:
1. 10 idee di contenuti
2. 10 hook forti
3. 10 titoli benefit-driven
4. 5 CTA coerenti
5. struttura video da 30-45 secondi
6. checklist qualità
7. report giornaliero

Regola: niente promesse false, niente numeri inventati, contenuti specifici e utili.`;

  return { miniSOP, hooks, titoli, ctas, promptMadre };
}

export default function PromptShortsPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    projectName: "",
    target: "",
    offer: "",
    objective: "",
    tone: "",
    channels: [],
    problem: "",
    proof: "",
    cta: "",
    materials: "",
  });
  const [generated, setGenerated] = useState<ReturnType<typeof generateOutput> | null>(null);

  const updateField = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleChannel = (ch: string) => {
    setFormData((prev) => ({
      ...prev,
      channels: prev.channels.includes(ch)
        ? prev.channels.filter((c) => c !== ch)
        : [...prev.channels, ch],
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.projectName.trim() && formData.target.trim();
      case 1:
        return formData.objective && formData.tone;
      case 2:
        return formData.problem.trim() && formData.channels.length > 0;
      default:
        return true;
    }
  };

  const handleGenerate = () => {
    setGenerated(generateOutput(formData));
    setCurrentStep(3);
  };

  const handleReset = () => {
    setFormData({
      projectName: "",
      target: "",
      offer: "",
      objective: "",
      tone: "",
      channels: [],
      problem: "",
      proof: "",
      cta: "",
      materials: "",
    });
    setGenerated(null);
    setCurrentStep(0);
  };

  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.04]">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
          <div className="flex items-center gap-2 text-xs text-white/30 mb-4">
            <Wand2 className="w-3.5 h-3.5" />
            <span>TOOL INTERATTIVO</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Configurazione Prompt <span className="text-gradient">Shorts</span>
          </h1>
          <p className="mt-3 text-white/40 max-w-xl">
            Compila la scheda progetto e genera prompt, hook, titoli e CTA personalizzati
            per i tuoi contenuti brevi.
          </p>
        </div>
      </section>

      {/* Stepper */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-2 mb-10">
          {steps.map((step, i) => (
            <button
              key={step.id}
              onClick={() => {
                if (i < currentStep) setCurrentStep(i);
              }}
              className={cn(
                "flex-1 flex items-center gap-2 px-4 py-3 rounded-xl text-left transition-all",
                currentStep === i
                  ? "bg-amber-500/10 border border-amber-500/20"
                  : currentStep > i
                  ? "bg-white/[0.03] border border-white/[0.06] cursor-pointer hover:bg-white/[0.05]"
                  : "bg-white/[0.01] border border-white/[0.03] opacity-40"
              )}
            >
              <step.icon
                className={cn(
                  "w-4 h-4 shrink-0",
                  currentStep === i ? "text-amber-400" : "text-white/30"
                )}
              />
              <div className="min-w-0">
                <p
                  className={cn(
                    "text-xs font-semibold truncate",
                    currentStep === i ? "text-amber-400" : "text-white/40"
                  )}
                >
                  {step.title}
                </p>
                <p className="text-[10px] text-white/25 truncate">{step.desc}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Step Content */}
        <div className="card-glass p-6 lg:p-10">
          {/* STEP 0 — Progetto */}
          {currentStep === 0 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-1">Scheda Progetto</h2>
                <p className="text-sm text-white/40">Informazioni base sul progetto o cliente.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    Nome progetto / cliente *
                  </label>
                  <input
                    type="text"
                    value={formData.projectName}
                    onChange={(e) => updateField("projectName", e.target.value)}
                    placeholder="Es. Guapacha, Mamasita Boutique, OMA Hub..."
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-amber-500/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    Target / Chi è il pubblico *
                  </label>
                  <input
                    type="text"
                    value={formData.target}
                    onChange={(e) => updateField("target", e.target.value)}
                    placeholder="Es. Imprenditori under 40, future spose, dottori..."
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-amber-500/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    Offerta / Cosa vendi
                  </label>
                  <input
                    type="text"
                    value={formData.offer}
                    onChange={(e) => updateField("offer", e.target.value)}
                    placeholder="Es. Corsi di danza, consulenza assicurativa, SaaS..."
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-amber-500/40 transition-colors"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 1 — Obiettivo */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-1">Obiettivo e Tono</h2>
                <p className="text-sm text-white/40">Cosa vuoi ottenere e come vuoi comunicare.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/60 mb-3">
                  Obiettivo principale *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {objectives.map((obj) => (
                    <button
                      key={obj.value}
                      onClick={() => updateField("objective", obj.value)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all",
                        formData.objective === obj.value
                          ? "bg-amber-500/10 border-amber-500/30"
                          : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]"
                      )}
                    >
                      <span className="text-lg">{obj.icon}</span>
                      <span
                        className={cn(
                          "text-sm font-medium",
                          formData.objective === obj.value ? "text-amber-400" : "text-white/50"
                        )}
                      >
                        {obj.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/60 mb-3">
                  Tono di voce *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {tones.map((t) => (
                    <button
                      key={t.value}
                      onClick={() => updateField("tone", t.value)}
                      className={cn(
                        "px-4 py-3 rounded-xl border text-left transition-all",
                        formData.tone === t.value
                          ? "bg-amber-500/10 border-amber-500/30"
                          : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]"
                      )}
                    >
                      <p
                        className={cn(
                          "text-sm font-medium",
                          formData.tone === t.value ? "text-amber-400" : "text-white/50"
                        )}
                      >
                        {t.label}
                      </p>
                      <p className="text-[10px] text-white/25 mt-0.5">{t.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 — Contenuto */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-1">Contenuto e Canali</h2>
                <p className="text-sm text-white/40">Materiali disponibili e dove pubblicare.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">
                  Problema forte / Dolore del target *
                </label>
                <textarea
                  value={formData.problem}
                  onChange={(e) => updateField("problem", e.target.value)}
                  placeholder="Es. Perdono clienti perché non sanno comunicare il valore del prodotto..."
                  rows={3}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-amber-500/40 transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">
                  Prova concreta / Dati / Esempi
                </label>
                <textarea
                  value={formData.proof}
                  onChange={(e) => updateField("proof", e.target.value)}
                  placeholder="Es. 50 clienti serviti, +200% conversione, demo funzionante..."
                  rows={2}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-amber-500/40 transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">
                  CTA desiderata
                </label>
                <input
                  type="text"
                  value={formData.cta}
                  onChange={(e) => updateField("cta", e.target.value)}
                  placeholder="Es. STRATEGIA, DEMO, CHECK, ACCESSO..."
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-amber-500/40 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/60 mb-3">
                  Canali di pubblicazione *
                </label>
                <div className="flex flex-wrap gap-2">
                  {channelOptions.map((ch) => (
                    <button
                      key={ch.value}
                      onClick={() => toggleChannel(ch.value)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm transition-all",
                        formData.channels.includes(ch.value)
                          ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                          : "bg-white/[0.02] border-white/[0.06] text-white/40 hover:bg-white/[0.04]"
                      )}
                    >
                      <span>{ch.icon}</span>
                      {ch.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">
                  Materiali disponibili
                </label>
                <input
                  type="text"
                  value={formData.materials}
                  onChange={(e) => updateField("materials", e.target.value)}
                  placeholder="Es. Video lunghi, screenshot demo, foto prodotto..."
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-amber-500/40 transition-colors"
                />
              </div>
            </div>
          )}

          {/* STEP 3 — Risultati */}
          {currentStep === 3 && generated && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    Output Generato
                  </h2>
                  <p className="text-sm text-white/40 mt-1">
                    Prompt, hook, titoli e CTA per <strong className="text-white/60">{formData.projectName}</strong>
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 px-4 py-2 text-xs text-white/40 hover:text-white/70 bg-white/[0.03] border border-white/[0.06] rounded-lg hover:bg-white/[0.06] transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  Ricomincia
                </button>
              </div>

              {/* Mini SOP */}
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    Mini SOP
                  </span>
                  <CopyButton text={generated.miniSOP} />
                </div>
                <pre className="text-xs text-white/40 whitespace-pre-wrap font-mono leading-relaxed">
                  {generated.miniSOP}
                </pre>
              </div>

              {/* Hook */}
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    10 Hook Forti
                  </span>
                  <CopyButton text={generated.hooks} />
                </div>
                <pre className="text-xs text-white/40 whitespace-pre-wrap font-mono leading-relaxed">
                  {generated.hooks}
                </pre>
              </div>

              {/* Titoli */}
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    10 Titoli Benefit-Driven
                  </span>
                  <CopyButton text={generated.titoli} />
                </div>
                <pre className="text-xs text-white/40 whitespace-pre-wrap font-mono leading-relaxed">
                  {generated.titoli}
                </pre>
              </div>

              {/* CTA */}
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    5 CTA Coerenti
                  </span>
                  <CopyButton text={generated.ctas} />
                </div>
                <pre className="text-xs text-white/40 whitespace-pre-wrap font-mono leading-relaxed">
                  {generated.ctas}
                </pre>
              </div>

              {/* Prompt Madre */}
              <div className="bg-gradient-to-r from-amber-500/[0.05] to-red-600/[0.03] border border-amber-500/15 rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3 h-3" />
                    Prompt Madre (copia e incolla nell'AI)
                  </span>
                  <CopyButton text={generated.promptMadre} label="Copia Prompt" />
                </div>
                <pre className="text-xs text-white/50 whitespace-pre-wrap font-mono leading-relaxed">
                  {generated.promptMadre}
                </pre>
              </div>
            </div>
          )}

          {/* Navigation */}
          {currentStep < 3 && (
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/[0.04]">
              <button
                onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
                disabled={currentStep === 0}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors",
                  currentStep === 0
                    ? "text-white/15 cursor-not-allowed"
                    : "text-white/50 hover:text-white/80 hover:bg-white/[0.04]"
                )}
              >
                <ChevronLeft className="w-4 h-4" />
                Indietro
              </button>

              {currentStep < 2 ? (
                <button
                  onClick={() => setCurrentStep((s) => s + 1)}
                  disabled={!canProceed()}
                  className={cn(
                    "flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all",
                    canProceed()
                      ? "bg-gradient-to-r from-amber-500 to-red-600 text-white hover:opacity-90"
                      : "bg-white/[0.04] text-white/20 cursor-not-allowed"
                  )}
                >
                  Avanti
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleGenerate}
                  disabled={!canProceed()}
                  className={cn(
                    "flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all",
                    canProceed()
                      ? "bg-gradient-to-r from-amber-500 to-red-600 text-white hover:opacity-90"
                      : "bg-white/[0.04] text-white/20 cursor-not-allowed"
                  )}
                >
                  <Sparkles className="w-4 h-4" />
                  Genera Prompt
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
