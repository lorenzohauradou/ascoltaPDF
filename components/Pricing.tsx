"use client"

import type React from "react"

import { useState } from "react"
import { Check, HelpCircle } from "lucide-react"

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <section className="py-16 relative" id="pricing">
      <div className="absolute -top-20 left-0 right-0 w-full h-40 bg-gradient-to-b from-indigo-50/50 to-transparent -z-10"></div>
      <div className="absolute -bottom-20 -right-40 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="text-center mb-12">
        <div className="inline-block mb-3 px-3 py-1 bg-indigo-100/80 text-indigo-600 text-sm font-medium rounded-full">
          Piani e Prezzi
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Scegli il piano più adatto a te</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Offriamo diverse opzioni per soddisfare le tue esigenze, dalla conversione occasionale all'uso professionale
          intensivo.
        </p>

        {/* Billing toggle */}
        <div className="flex items-center justify-center mt-8 mb-8">
          <span
            className={`text-sm mr-3 ${billingCycle === "monthly" ? "font-medium text-slate-800" : "text-slate-500"}`}
          >
            Mensile
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
            className="relative inline-flex h-6 w-12 items-center rounded-full bg-slate-200"
            aria-pressed={billingCycle === "yearly"}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                billingCycle === "yearly" ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </button>
          <span
            className={`text-sm ml-3 ${billingCycle === "yearly" ? "font-medium text-slate-800" : "text-slate-500"}`}
          >
            Annuale <span className="text-emerald-600 font-medium">-20%</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {/* Free Plan */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden transition-all hover:shadow-lg">
          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Libero</h3>
            <p className="text-slate-600 mb-6 h-12">Ideale per chi vuole provare il servizio.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-800">€0</span>
              <span className="text-slate-500 ml-1">/mese</span>
            </div>
            <button className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg font-medium transition-colors">
              Inizia Gratis
            </button>
          </div>
          <div className="border-t border-slate-100 p-6">
            <ul className="space-y-3">
              <PricingFeature included>50 pagine al mese</PricingFeature>
              <PricingFeature included>File fino a 10 MB</PricingFeature>
              <PricingFeature included>Qualità audio standard</PricingFeature>
              <PricingFeature included>2 voci disponibili</PricingFeature>
              <PricingFeature>Nessuna pubblicità audio</PricingFeature>
              <PricingFeature>Archiviazione audio</PricingFeature>
              <PricingFeature>Supporto via email</PricingFeature>
            </ul>
          </div>
        </div>

        {/* Personal Plan */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-indigo-500 overflow-hidden relative transform transition-all hover:shadow-xl hover:-translate-y-1">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
          <div className="absolute top-4 right-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold py-1 px-3 rounded-full shadow-md">
            Più Popolare
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Personale</h3>
            <p className="text-slate-600 mb-6 h-12">Perfetto per studenti e uso personale regolare.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-800">
                {billingCycle === "monthly" ? "€7,99" : "€6,59"}
              </span>
              <span className="text-slate-500 ml-1">/mese</span>
              {billingCycle === "yearly" && (
                <div className="text-sm text-emerald-600 font-medium mt-1">Fatturato annualmente (€79/anno)</div>
              )}
            </div>
            <button className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors shadow-sm">
              Inizia con Personale
            </button>
          </div>
          <div className="border-t border-slate-100 p-6">
            <ul className="space-y-3">
              <PricingFeature included>750 pagine al mese</PricingFeature>
              <PricingFeature included>File fino a 25 MB</PricingFeature>
              <PricingFeature included>Qualità audio alta</PricingFeature>
              <PricingFeature included>5 voci disponibili</PricingFeature>
              <PricingFeature included>Nessuna pubblicità audio</PricingFeature>
              <PricingFeature included>Archiviazione per 30 giorni</PricingFeature>
              <PricingFeature included>Supporto via email</PricingFeature>
            </ul>
          </div>
        </div>

        {/* Professional Plan */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden transition-all hover:shadow-lg">
          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Professionale</h3>
            <p className="text-slate-600 mb-6 h-12">Per professionisti e utenti intensivi.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-800">
                {billingCycle === "monthly" ? "€19,99" : "€16,59"}
              </span>
              <span className="text-slate-500 ml-1">/mese</span>
              {billingCycle === "yearly" && (
                <div className="text-sm text-emerald-600 font-medium mt-1">Fatturato annualmente (€199/anno)</div>
              )}
            </div>
            <button className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-medium transition-colors">
              Inizia con Professionale
            </button>
          </div>
          <div className="border-t border-slate-100 p-6">
            <ul className="space-y-3">
              <PricingFeature included>2.500 pagine al mese</PricingFeature>
              <PricingFeature included>File fino a 100 MB</PricingFeature>
              <PricingFeature included>Qualità audio premium</PricingFeature>
              <PricingFeature included>Tutte le voci disponibili (10+)</PricingFeature>
              <PricingFeature included>Nessuna pubblicità audio</PricingFeature>
              <PricingFeature included>Archiviazione permanente</PricingFeature>
              <PricingFeature included>Supporto prioritario</PricingFeature>
              <PricingFeature included>Organizzazione in cartelle</PricingFeature>
              <PricingFeature included>Link condivisibili</PricingFeature>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-slate-600 max-w-2xl mx-auto">
          Hai esigenze particolari o sei un'azienda? Contattaci per un{" "}
          <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
            piano personalizzato
          </a>
          .
        </p>
      </div>
    </section>
  )
}

interface PricingFeatureProps {
  children: React.ReactNode
  included?: boolean
  tooltip?: string
}

function PricingFeature({ children, included = false, tooltip }: PricingFeatureProps) {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0 mt-0.5">
        {included ? (
          <Check className="h-5 w-5 text-emerald-500" />
        ) : (
          <div className="h-5 w-5 rounded-full border border-slate-200"></div>
        )}
      </div>
      <span className={`ml-3 text-sm ${included ? "text-slate-700" : "text-slate-400"}`}>
        {children}
        {tooltip && (
          <span className="inline-block ml-1 text-slate-400 cursor-help" title={tooltip}>
            <HelpCircle className="h-3.5 w-3.5" />
          </span>
        )}
      </span>
    </li>
  )
}