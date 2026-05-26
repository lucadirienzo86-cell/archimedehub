"use client";

import { useState } from "react";
import {
  BookOpen,
  FileText,
  Shield,
  Scissors,
  PenTool,
  Type,
  Eye,
  Share2,
  BarChart3,
  CheckSquare,
  Code2,
  Layers,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  Zap,
  AlertTriangle,
  XCircle,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Target,
  Clock,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  number: string;
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function Section({ id, number, title, icon: Icon, children, defaultOpen = false }: SectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div id={id} className="card-glass overflow-hidden scroll-mt-24">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-6 lg:p-8 text-left hover:bg-white/[0.02] transition-colors"
      >
        <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-amber-400" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xs font-semibold text-amber-400/60 uppercase tracking-wider">
            Sezione {number}
          </span>
          <h2 className="text-lg lg:text-xl font-bold mt-0.5">{title}</h2>
        </div>
        <div className="shrink-0 text-white/30">
          {open ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
        </div>
      </button>
      <div
        className={cn(
          "transition-all duration-300 overflow-hidden",
          open ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 lg:px-8 pb-8 pt-0 border-t border-white/[0.04]">
          {children}
        </div>
      </div>
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-semibold text-white/90 mt-6 mb-3">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-white/50 leading-relaxed mb-3">{children}</p>;
}

function List({ items, icon }: { items: string[]; icon?: React.ElementType }) {
  const Icon = icon || CheckCircle2;
  return (
    <ul className="space-y-2 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-white/50">
          <Icon className="w-4 h-4 text-amber-500/60 shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DoDont({ doItems, dontItems }: { doItems: string[]; dontItems: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div className="bg-emerald-500/[0.05] border border-emerald-500/10 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Da fare</span>
        </div>
        <ul className="space-y-1.5">
          {doItems.map((item, i) => (
            <li key={i} className="text-xs text-white/50 flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-red-500/[0.05] border border-red-500/10 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <XCircle className="w-4 h-4 text-red-400" />
          <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Da non fare</span>
        </div>
        <ul className="space-y-1.5">
          {dontItems.map((item, i) => (
            <li key={i} className="text-xs text-white/50 flex items-start gap-2">
              <span className="text-red-400 mt-0.5">✗</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mb-4 rounded-xl border border-white/[0.06]">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-white/[0.03]">
            {headers.map((h, i) => (
              <th key={i} className="text-left px-4 py-3 text-xs font-semibold text-white/60 uppercase tracking-wider">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-white/[0.04]">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-white/50 text-xs">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PromptBlock({ title, content }: { title: string; content: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 mb-4 relative group">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-amber-400/80 uppercase tracking-wider">{title}</span>
        <button
          onClick={handleCopy}
          className="text-xs text-white/30 hover:text-white/60 transition-colors px-2 py-1 rounded hover:bg-white/[0.04]"
        >
          {copied ? "Copiato ✓" : "Copia"}
        </button>
      </div>
      <pre className="text-xs text-white/40 whitespace-pre-wrap font-mono leading-relaxed">{content}</pre>
    </div>
  );
}

const sections = [
  { id: "scopo", number: "01", title: "Scopo della SOP", icon: BookOpen },
  { id: "scheda", number: "02", title: "Scheda Progetto", icon: FileText },
  { id: "regole", number: "03", title: "Regole Editoriali Universali", icon: Shield },
  { id: "selezione", number: "04", title: "Selezione del Contenuto Madre", icon: Scissors },
  { id: "creazione", number: "05", title: "Creazione dello Short / Reel / Post", icon: PenTool },
  { id: "titoli", number: "06", title: "Titoli, Caption e CTA", icon: Type },
  { id: "visuali", number: "07", title: "Regole Visuali e Qualità Video", icon: Eye },
  { id: "pubblicazione", number: "08", title: "Pubblicazione Multi-Canale", icon: Share2 },
  { id: "report", number: "09", title: "Report Giornaliero", icon: BarChart3 },
  { id: "checklist", number: "10", title: "Checklist Operative", icon: CheckSquare },
  { id: "prompt", number: "11", title: "Prompt Riutilizzabili", icon: Code2 },
  { id: "esempi", number: "12", title: "Esempi di Adattamento per Progetto", icon: Layers },
  { id: "faq", number: "13", title: "FAQ e Regole Dure", icon: HelpCircle },
];

export default function SOPPage() {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.04]">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="flex items-center gap-2 text-xs text-white/30 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>SISTEMA OPERATIVO</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            SOP Universale
          </h1>
          <p className="mt-4 text-lg text-white/40 max-w-2xl leading-relaxed">
            Sistema operativo per trasformare qualsiasi progetto in contenuti brevi,
            pubblicabili e misurabili. 13 sezioni operative.
          </p>

          {/* Index */}
          <div className="mt-8 flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-3 py-1.5 text-xs text-white/40 hover:text-amber-400 bg-white/[0.03] hover:bg-amber-500/10 border border-white/[0.06] hover:border-amber-500/20 rounded-lg transition-colors"
              >
                {s.number}. {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-4">
        {/* 01 — Scopo */}
        <Section id="scopo" number="01" title="Scopo della SOP" icon={BookOpen} defaultOpen>
          <P>
            Questa SOP serve a prendere qualsiasi progetto e trasformarlo in contenuti brevi,
            chiari e pubblicabili. Il metodo nasce da una logica semplice: catturare attenzione,
            dare valore concreto, chiudere con una CTA misurabile e migliorare ogni giorno sui dati reali.
          </P>
          <SubHeading>Traduzione operativa</SubHeading>
          <P>Ogni progetto deve rispondere a tre domande:</P>
          <div className="space-y-3 mb-4">
            {[
              { q: "Che problema risolve?", n: "1" },
              { q: "Per chi lo risolve?", n: "2" },
              { q: "Quale azione vogliamo far fare alla persona dopo aver visto il contenuto?", n: "3" },
            ].map((item) => (
              <div key={item.n} className="flex items-start gap-3 bg-white/[0.02] rounded-lg p-4 border border-white/[0.04]">
                <span className="text-lg font-bold text-amber-500/30">{item.n}</span>
                <span className="text-sm text-white/60">{item.q}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* 02 — Scheda Progetto */}
        <Section id="scheda" number="02" title="Scheda Progetto da Compilare" icon={FileText}>
          <P>
            Prima di creare contenuti, compila questa scheda. Senza queste risposte,
            il contenuto diventa fuffa generica.
          </P>
          <Table
            headers={["Campo", "Domanda guida", "Risposta progetto"]}
            rows={[
              ["Nome progetto", "Come si chiama il progetto o il cliente?", "[...]"],
              ["Target", "A chi parliamo davvero?", "[...]"],
              ["Problema forte", "Quale dolore o desiderio agganciamo?", "[...]"],
              ["Risultato promesso", "Cosa ottiene il pubblico?", "[...]"],
              ["Prova concreta", "Quali dati, screenshot, demo, esempi reali abbiamo?", "[...]"],
              ["Tono", "Professionale, diretto, provocatorio, premium, educativo?", "[...]"],
              ["Offerta", "Cosa vendiamo o proponiamo?", "[...]"],
              ["CTA", "Commentare, prenotare call, scaricare guida, scrivere in DM?", "[...]"],
              ["KPI", "Views, lead, commenti, click, richieste, vendite?", "[...]"],
            ]}
          />
        </Section>

        {/* 03 — Regole Editoriali */}
        <Section id="regole" number="03" title="Regole Editoriali Universali" icon={Shield}>
          <List
            items={[
              "Niente numeri inventati, guadagni falsi o promesse non dimostrabili.",
              "Ogni contenuto deve avere un solo messaggio principale.",
              "Frasi corte. Una frase lunga uccide il video.",
              "Il pubblico deve capire in 3 secondi perché dovrebbe restare.",
              "Il contenuto deve insegnare, mostrare, risolvere o incuriosire.",
              "La CTA deve essere coerente con il contenuto, non appiccicata alla fine.",
              "Ogni contenuto va pensato per essere capito anche senza audio.",
              "Se usi IA, serve controllo qualità umano e uso etico. Potenza senza controllo = disastro elegante.",
            ]}
          />
          <div className="bg-amber-500/[0.05] border border-amber-500/15 rounded-xl p-5 mt-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-400">Regola Anti-Fuffa</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Se il contenuto non dice nulla di specifico, non pubblicarlo.
              Meglio un contenuto in meno che un contenuto generico che rovina il posizionamento.
            </p>
          </div>
        </Section>

        {/* 04 — Selezione Contenuto Madre */}
        <Section id="selezione" number="04" title="Selezione del Contenuto Madre" icon={Scissors}>
          <P>
            Il contenuto madre può essere un video lungo, una call, una demo, un documento,
            una pagina prodotto, una consulenza, una recensione, una lezione o una conversazione tecnica.
          </P>
          <SubHeading>Processo</SubHeading>
          <List
            items={[
              "Cerca il punto in cui succede qualcosa di utile, controverso o visivamente interessante.",
              "Taglia tutto ciò che non serve alla comprensione.",
              "Isola una singola idea forte: problema, errore, soluzione, esempio, risultato.",
              "Trasforma quel punto in un mini-tutorial o in una micro-storia.",
              "Chiudi con una CTA che chiede una risposta semplice.",
            ]}
          />
          <SubHeading>Tipologie</SubHeading>
          <Table
            headers={["Tipo contenuto madre", "Cosa cercare", "Output migliore", "Da evitare"]}
            rows={[
              ["Video lungo", "Momenti pratici, demo, esempi", "Short tutorial", "Clip fuori contesto"],
              ["Call cliente", "Obiezioni, problemi reali, soluzioni", "Post educativo / reel", "Dati sensibili"],
              ["Prodotto", "Beneficio visibile, trasformazione", "Video dimostrativo", "Spot piatto"],
              ["Software", "Prima/dopo, schermata utile, automazione", "Mini demo", "Schermate illeggibili"],
              ["Evento", "Momento forte, testimonianza, atmosfera", "Reel emozionale", "Montaggio casuale"],
            ]}
          />
        </Section>

        {/* 05 — Creazione Short */}
        <Section id="creazione" number="05" title="Creazione dello Short / Reel / Post" icon={PenTool}>
          <SubHeading>Struttura base</SubHeading>
          <Table
            headers={["Fase", "Durata indicativa", "Obiettivo", "Esempio"]}
            rows={[
              ["Hook", "0-3 sec", "Fermare lo scroll", "\"Stai perdendo clienti per questo errore.\""],
              ["Problema", "3-8 sec", "Far riconoscere il dolore", "\"La gente non capisce cosa vendi.\""],
              ["Valore", "8-35 sec", "Mostrare soluzione concreta", "\"Fai così: titolo, prova, CTA.\""],
              ["CTA", "Finale", "Far compiere una sola azione", "\"Commenta STRATEGIA e ti mando la checklist.\""],
            ]}
          />
          <SubHeading>Regole primi 10 secondi</SubHeading>
          <DoDont
            doItems={[
              "Mostra subito qualcosa di rilevante",
              "Apri con una frase forte",
              "Usa zoom, movimento, screenshot leggibili",
              "Fai capire il beneficio subito",
            ]}
            dontItems={[
              "Schermate grigie o ferme",
              "Menu irrilevanti",
              "Introduzioni lente",
              "Testi piccoli",
              "Clip che partono senza contesto",
            ]}
          />
        </Section>

        {/* 06 — Titoli, Caption, CTA */}
        <Section id="titoli" number="06" title="Titoli, Caption e CTA" icon={Type}>
          <SubHeading>Titoli</SubHeading>
          <List
            items={[
              "Devono essere orientati al beneficio: \"Come ottenere X\", \"Il metodo per evitare Y\".",
              "Niente tutto maiuscolo. Sembra disperazione digitale.",
              "Titolo specifico batte titolo generico.",
              "Evita titoli da ChatGPT pigro: \"Scopri il segreto definitivo\". Troppo vago.",
              "Usa Title Case quando serve ordine visivo.",
            ]}
          />
          <Table
            headers={["Debole", "Migliore", "Perché funziona"]}
            rows={[
              ["Scopri il nostro servizio", "Come Ridurre Errori Operativi In 10 Minuti", "Promette un risultato concreto"],
              ["Nuova automazione AI", "Questo Flusso Ti Evita 3 Ore Di Lavoro", "Mostra beneficio e tempo"],
              ["Perché scegliere noi", "Il Controllo Che Manca Alla Tua Azienda", "Aggancia un problema reale"],
              ["Bellissimo vestito", "Il Look Che Cambia Una Serata Intera", "Trasforma prodotto in desiderio"],
            ]}
          />
          <SubHeading>Caption</SubHeading>
          <List
            items={[
              "Breve. Deve essere letta tutta.",
              "Riprende il tema del video, non lo riscrive da capo.",
              "Usa massimo una CTA principale.",
              "Hashtag specifici, non generici. Niente #fyp, #free, #viral a caso.",
              "Varia gli hashtag in base al progetto e al contenuto.",
            ]}
          />
          <SubHeading>CTA universali adattabili</SubHeading>
          <Table
            headers={["Obiettivo", "CTA consigliata", "Quando usarla"]}
            rows={[
              ["Lead consulenza", "Commenta STRATEGIA e ti mando i prossimi passi.", "Servizi professionali, consulenze"],
              ["Vendita prodotto", "Scrivi MODELLO e ti mando dettagli e taglie.", "E-commerce, fashion, retail"],
              ["Recruiting", "Commenta RETE e ti spiego come candidarti.", "Rete vendita, collaboratori"],
              ["Community", "Commenta ACCESSO e ti mando il link.", "Gruppi, newsletter, community"],
              ["Demo software", "Commenta DEMO e ti mostro il flusso completo.", "SaaS, Agentic OS, automazioni"],
            ]}
          />
        </Section>

        {/* 07 — Regole Visuali */}
        <Section id="visuali" number="07" title="Regole Visuali e Qualità Video" icon={Eye}>
          <List
            items={[
              "Formato verticale: 9:16. Niente landscape riciclato male.",
              "Testi grandi e centrali. Non metterli troppo in basso.",
              "Schermate leggibili: zoomare, scrollare, evidenziare.",
              "Qualità HD. Video sfocato = percezione scarsa del brand.",
              "Niente musica se non migliora davvero la comprensione.",
              "Non tagliare il contenuto a metà. Ogni short deve chiudere un'idea.",
              "Inserire il volto quando aumenta fiducia e attenzione.",
              "La miniatura deve essere pensata nel primo secondo: frame interessante, non casuale.",
            ]}
          />
        </Section>

        {/* 08 — Pubblicazione Multi-Canale */}
        <Section id="pubblicazione" number="08" title="Pubblicazione Multi-Canale" icon={Share2}>
          <Table
            headers={["Canale", "Formato", "Caption", "Nota operativa"]}
            rows={[
              ["YouTube Shorts", "Video verticale, max 59 sec", "Titolo forte + descrizione breve", "Collegare al contenuto lungo quando possibile"],
              ["Instagram Reels", "Video verticale", "Titolo + hashtag specifici", "Visual più curato e immediato"],
              ["TikTok", "Video verticale", "Caption breve + hashtag mirati", "Hook aggressivo nei primi secondi"],
              ["LinkedIn", "Video o post breve", "Tono più professionale", "Usare dati, lezioni, casi studio"],
              ["X", "Post breve/thread", "Curiosità + promessa concreta", "Buono per testare hook e titoli"],
            ]}
          />
        </Section>

        {/* 09 — Report Giornaliero */}
        <Section id="report" number="09" title="Report Giornaliero" icon={BarChart3}>
          <div className="bg-amber-500/[0.05] border border-amber-500/15 rounded-xl p-5 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-400">Obbligo operativo</span>
            </div>
            <p className="text-sm text-white/50">
              Ogni giorno va inviato un aggiornamento. Non in file separati. Non "poi lo faccio".
              Messaggio diretto, sintetico, con numeri e link.
            </p>
          </div>
          <Table
            headers={["Campo", "Contenuto da inviare"]}
            rows={[
              ["Contenuti creati", "[Numero] contenuti creati oggi"],
              ["Link pubblicati", "[Link 1] - [Link 2] - [Link 3]"],
              ["Views per contenuto", "[Video 1: X views] [Video 2: Y views]"],
              ["Cosa ha funzionato", "[Hook / tema / formato / canale]"],
              ["Cosa migliorare domani", "[Azione concreta]"],
              ["Blocco operativo", "[Se presente, indicare subito il problema]"],
            ]}
          />
        </Section>

        {/* 10 — Checklist */}
        <Section id="checklist" number="10" title="Checklist Operative" icon={CheckSquare}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <SubHeading>Prima di pubblicare</SubHeading>
              <List
                items={[
                  "Hook nei primi 3 secondi",
                  "Beneficio chiaro",
                  "Video verticale",
                  "Testi leggibili",
                  "Audio comprensibile",
                  "Niente promesse false",
                  "CTA coerente",
                  "Titolo specifico",
                  "Hashtag mirati",
                  "Qualità HD",
                ]}
              />
            </div>
            <div>
              <SubHeading>Dopo la pubblicazione</SubHeading>
              <List
                items={[
                  "Link salvato",
                  "Views annotate",
                  "Commenti controllati",
                  "Risposte inviate",
                  "Insight scritto",
                  "Prossimo contenuto scelto",
                  "Report giornaliero mandato",
                ]}
              />
            </div>
          </div>
        </Section>

        {/* 11 — Prompt Riutilizzabili */}
        <Section id="prompt" number="11" title="Prompt Riutilizzabili" icon={Code2}>
          <PromptBlock
            title="Prompt madre per adattare la SOP a un progetto"
            content={`Agisci come strategist, editor e project manager dei contenuti brevi.
Prendi il progetto seguente: [NOME PROGETTO].
Target: [TARGET].
Offerta: [OFFERTA].
Obiettivo: [OBIETTIVO].
Tono: [TONO].
Materiali disponibili: [VIDEO / FOTO / DOCUMENTI / DEMO / CALL / PAGINE].

Crea una mini SOP operativa per produrre contenuti brevi.
Includi:
1. 10 idee di contenuti
2. 10 hook forti
3. 10 titoli benefit-driven
4. 5 CTA coerenti
5. struttura video da 30-45 secondi
6. checklist qualità
7. report giornaliero
Regola: niente promesse false, niente numeri inventati, contenuti specifici e utili.`}
          />
          <PromptBlock
            title="Prompt per titoli più forti"
            content={`Dammi 20 titoli forti, specifici e orientati al beneficio per questo contenuto: [DESCRIZIONE].
Devono incuriosire senza mentire.
Niente full caps.
Niente frasi generiche.
Massimo 45 caratteri quando possibile.
Dividili in: provocatori, educativi, tutorial, premium.`}
          />
          <PromptBlock
            title="Prompt per trasformare un video lungo in short"
            content={`Analizza questo contenuto lungo: [TRASCRIZIONE / LINK / RIASSUNTO].
Trova 5 clip potenziali per short.
Per ogni clip dammi:
- punto iniziale e finale
- hook
- titolo
- struttura
- CTA
- perché potrebbe funzionare
Scarta le parti lente, generiche o non comprensibili senza contesto.`}
          />
        </Section>

        {/* 12 — Esempi */}
        <Section id="esempi" number="12" title="Esempi di Adattamento per Progetto" icon={Layers}>
          <Table
            headers={["Progetto", "Angolo contenuto", "Hook", "CTA", "KPI"]}
            rows={[
              ["Assicurazioni", "Errore che costa caro al cliente", "Questa garanzia manca quasi sempre.", "Commenta CHECK e ti mando la lista.", "Richieste preventivo"],
              ["Agentic OS / Hermes", "Automazione che sostituisce lavoro manuale", "Questo flusso fa da solo 3 passaggi.", "Commenta DEMO.", "Demo prenotate"],
              ["Mamasita Boutique", "Look reale indossato in negozio", "Questo outfit cambia tutta la serata.", "Scrivi LOOK.", "DM e vendite"],
              ["MiniPlantir", "Controllo cassa e scadenze", "La tua azienda perde soldi qui.", "Commenta CONTROLLO.", "Call strategiche"],
              ["EAR LAB / associazione", "Evento, progetto, impatto locale", "Questa cosa manca alla città.", "Commenta PARTECIPO.", "Partecipanti"],
              ["Immobiliare", "Errore gestione affitti / morosità", "Aspettare troppo ti costa migliaia.", "Commenta IMMOBILE.", "Contatti qualificati"],
            ]}
          />
        </Section>

        {/* 13 — FAQ */}
        <Section id="faq" number="13" title="FAQ e Regole Dure" icon={HelpCircle}>
          <div className="space-y-4">
            {[
              {
                q: "Quanti contenuti devo pubblicare?",
                a: "Dipende dal progetto. Se vuoi spingere forte: 3 al giorno. Se vuoi qualità sostenibile: 5 a settimana.",
              },
              {
                q: "Posso usare lo stesso contenuto su più piattaforme?",
                a: "Sì, ma adatta titolo, caption, hashtag e tono. Copiare e incollare ovunque è pigro.",
              },
              {
                q: "Posso usare IA?",
                a: "Sì, ma l'IA deve accelerare, non sostituire il giudizio. Controllo qualità obbligatorio.",
              },
              {
                q: "Cosa faccio se il contenuto non performa?",
                a: "Guarda hook, chiarezza, titolo, visual e CTA. Poi rifai una versione migliore.",
              },
              {
                q: "Quando scarto una clip?",
                a: "Quando non si capisce, è lenta, non dà valore o sembra pubblicità mascherata.",
              },
              {
                q: "Qual è la regola più importante?",
                a: "Specificità. Il pubblico perdona un video semplice, non un contenuto vuoto.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-4 h-4 text-amber-500/50 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white/70 mb-1">{faq.q}</p>
                    <p className="text-sm text-white/40 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-amber-500/[0.08] to-red-600/[0.05] border border-amber-500/15 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 text-amber-400" />
              <span className="text-base font-bold text-amber-400">Chiusura schietta</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Un progetto non cresce perché "pubblichiamo qualcosa".
              Cresce quando ogni contenuto ha una funzione: attenzione, fiducia, prova, conversione.
              Il resto è rumore.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
