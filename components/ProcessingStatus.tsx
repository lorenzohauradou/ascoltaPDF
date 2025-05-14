"use client"

import { Loader2 } from "lucide-react"

interface ProcessingStatusProps {
  step: string
}

export default function ProcessingStatus({ step }: ProcessingStatusProps) {
  return (
    <div className="mt-8 p-8 bg-white border border-slate-200 rounded-2xl shadow-md text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-purple-50/50"></div>

      <div className="relative">
        <div className="inline-flex justify-center items-center mb-6">
          <div className="absolute w-16 h-16 rounded-full bg-indigo-100 animate-ping opacity-30"></div>
          <Loader2 className="h-10 w-10 text-indigo-600 animate-spin relative" />
        </div>

        <h3 className="text-xl font-bold text-slate-800 mb-3">Conversione in corso</h3>
        <p className="text-slate-600 max-w-md mx-auto">{step}</p>

        <div className="mt-6 flex justify-center space-x-1">
          <div className="w-2 h-2 rounded-full bg-indigo-300 animate-bounce"></div>
          <div className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-2 h-2 rounded-full bg-indigo-700 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </div>
  )
}
