import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="text-center py-14 md:py-20">
      <div className="mx-auto max-w-3xl relative">
        <div className="absolute -top-14 -left-14 w-28 h-28 bg-indigo-100 rounded-full blur-3xl opacity-70 -z-10"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-70 -z-10"></div>

        <div className="inline-block mb-4 px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full shadow-sm">
          Completamente Gratuito!
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 tracking-tight leading-tight">
          Dai <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Voce</span> ai Tuoi PDF, Senza Costi
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium mb-8">
          Trasforma istantaneamente i tuoi documenti PDF in audio di alta qualità. Prova subito il nostro convertitore gratuito. Cerchi funzionalità avanzate e voci ultra-realistiche? Scopri il nostro partner <a href="https://appuntoai.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-600 hover:text-indigo-700 underline">AppuntoAI</a>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="#file-uploader-section" // Assicurati che FileUploader abbia questo ID o cambialo
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
          >
            Inizia a Convertire Gratis
          </Link>
          <a
            href="https://appuntoai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-300 rounded-lg font-semibold text-md transition-colors duration-300 ease-in-out group"
          >
            <Sparkles className="w-4 h-4 mr-2 text-indigo-500 group-hover:text-indigo-600 transition-colors" />
            Funzionalità Pro con AppuntoAI
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="flex -space-x-2">
            <img
              src="/placeholder.svg?height=40&width=40" // Considera di usare avatar reali o più vari
              alt="Avatar utente 1"
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            />
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="Avatar utente 2"
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            />
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="Avatar utente 3"
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            />
          </div>
          <div className="text-sm text-slate-600">
            Già <span className="font-semibold">migliaia di PDF</span> convertiti ogni giorno!
          </div>
        </div>
      </div>
    </section>
  )
}
