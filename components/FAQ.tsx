"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  return (
    <section className="py-16 relative">
      <div className="absolute -bottom-20 -left-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="text-center mb-12">
        <div className="inline-block mb-3 px-3 py-1 bg-indigo-100/80 text-indigo-600 text-sm font-medium rounded-full">
          Domande Frequenti
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Hai delle domande?</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Ecco le risposte alle domande più comuni sul nostro servizio di conversione PDF in audio.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} isLast={index === faqItems.length - 1} />
        ))}
      </div>
    </section>
  )
}

interface FAQItemProps {
  question: string
  answer: string
  isLast: boolean
}

function FAQItem({ question, answer, isLast }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`${!isLast ? "border-b border-slate-200" : ""}`}>
      <button className="flex justify-between items-center w-full py-5 text-left" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-semibold text-slate-800">{question}</h3>
        <ChevronDown
          className={`text-slate-500 transition-transform ${isOpen ? "transform rotate-180" : ""}`}
          size={20}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-slate-600">{answer}</p>
      </div>
    </div>
  )
}

const faqItems = [
  {
    question: "Come funziona esattamente AudioPDF?",
    answer:
      "AudioPDF utilizza tecnologie avanzate di riconoscimento del testo e sintesi vocale per convertire i tuoi documenti PDF in file audio di alta qualità. Basta caricare il tuo PDF sulla nostra piattaforma, e in pochi secondi riceverai un file audio che potrai ascoltare su qualsiasi dispositivo.",
  },
  {
    question: "Quali lingue sono supportate?",
    answer:
      "Attualmente supportiamo italiano, inglese, francese, spagnolo, tedesco e portoghese. Stiamo lavorando costantemente per aggiungere nuove lingue al nostro servizio.",
  },
  {
    question: "Quanto costa utilizzare AudioPDF?",
    answer:
      "Offriamo un piano gratuito che consente di convertire fino a 3 PDF al mese, con una dimensione massima di 10MB per file. Per utenti più esigenti, abbiamo piani premium a partire da €9,99 al mese con conversioni illimitate e funzionalità avanzate.",
  },
  {
    question: "I miei documenti sono al sicuro?",
    answer:
      "Assolutamente sì. La privacy e la sicurezza sono le nostre priorità. Tutti i file caricati vengono elaborati in modo sicuro e vengono eliminati automaticamente dai nostri server dopo 24 ore. Non conserviamo né accediamo al contenuto dei tuoi documenti.",
  },
  {
    question: "Posso utilizzare AudioPDF su dispositivi mobili?",
    answer:
      "Sì, AudioPDF è completamente responsive e funziona perfettamente su smartphone e tablet. Inoltre, offriamo app native per iOS e Android che permettono di convertire e ascoltare i tuoi PDF anche offline.",
  },
  {
    question: "Come posso contattare il supporto?",
    answer:
      "Puoi contattare il nostro team di supporto tramite email all'indirizzo supporto@audiopdf.it o utilizzando il modulo di contatto presente sul nostro sito. Rispondiamo generalmente entro 24 ore lavorative.",
  },
]
