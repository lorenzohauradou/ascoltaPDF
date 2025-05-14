"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Upload, FileText, AlertCircle, CheckCircle2 } from "lucide-react"
import AudioPlayer from "./AudioPlayer"
import ProcessingStatus from "./ProcessingStatus"

export default function FileUploader() {
  const [file, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [processingStep, setProcessingStep] = useState("")
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0])
    }
  }

  const validateAndSetFile = (file: File) => {
    setError(null)

    if (!file.name.toLowerCase().endsWith(".pdf")) {
      setError("Tipo di file non valido. Carica solo PDF.")
      toast({
        variant: "destructive",
        title: "Errore",
        description: "Tipo di file non valido. Carica solo PDF.",
      })
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      // 10MB limit
      setError("Il file è troppo grande (max 10MB).")
      toast({
        variant: "destructive",
        title: "Errore",
        description: "Il file è troppo grande (max 10MB).",
      })
      return
    }

    setFile(file)
    toast({
      title: "File selezionato",
      description: `${file.name} è pronto per la conversione.`,
    })
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0])
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleConvertClick = async () => {
    if (!file) {
      return;
    }

    setError(null);
    setAudioUrl(null);
    setIsUploading(true);
    setProcessingStep("Invio del file e conversione in corso...");

    const formData = new FormData();
    formData.append('file', file);

    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/process-pdf/`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });

      setIsUploading(false);
      setIsProcessing(true);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ detail: `Errore HTTP: ${response.status} (${response.statusText})` }));
        throw new Error(errorData.detail || `Errore durante l'elaborazione del PDF.`);
      }

      const data = await response.json();

      if (data.audio_filename) {
        setIsProcessing(false);
        setAudioUrl(`http://localhost:8000/api/audio/${data.audio_filename}`);
        toast({
          title: "Conversione completata!",
          description: data.message || "Il tuo audio è pronto per l'ascolto!",
          variant: "default",
        });
      } else {
        throw new Error(data.message || "Risposta non valida dal server.");
      }

    } catch (err: any) {
      setIsUploading(false);
      setIsProcessing(false);
      const errorMessage = err.message || "Si è verificato un errore durante la conversione. Riprova più tardi.";
      setError(errorMessage);
      toast({
        variant: "destructive",
        title: "Errore di Conversione",
        description: errorMessage,
      });
    }
  };

  const resetState = () => {
    setFile(null)
    setAudioUrl(null)
    setError(null)
    setIsUploading(false)
    setIsProcessing(false)
  }

  if (audioUrl) {
    return (
      <div className="mt-8">
        <AudioPlayer audioUrl={audioUrl} fileName={file?.name || "Audio convertito"} />
        <div className="mt-8 text-center">
          <button
            onClick={resetState}
            className="px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg font-medium transition-colors shadow-sm"
          >
            Converti un Altro PDF
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-indigo-600"
            >
              <path
                d="M9 16H15M12 12V19M7 8H17M5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44772 4 5 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-slate-800 font-semibold mb-1">1. Carica</h3>
          <p className="text-slate-500 text-sm">Carica il tuo file PDF dal tuo dispositivo</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-indigo-600"
            >
              <path
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-slate-800 font-semibold mb-1">2. Converti</h3>
          <p className="text-slate-500 text-sm">La nostra AI trasforma il testo del PDF in audio</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-indigo-600"
            >
              <path
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-slate-800 font-semibold mb-1">3. Ascolta</h3>
          <p className="text-slate-500 text-sm">Ascolta l'audio in streaming o scaricalo</p>
        </div>
      </div>

      <div
        className={`relative border-2 ${
          isDragging ? "border-indigo-400 bg-indigo-50" : "border-slate-200 hover:border-indigo-300"
        } bg-white rounded-2xl p-8 text-center transition-colors cursor-pointer shadow-md overflow-hidden group`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={!file ? handleUploadClick : undefined}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/30 to-purple-100/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

        <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".pdf" className="hidden" />

        {!file && (
          <div className="py-8">
            <div className="mx-auto w-16 h-16 mb-6 text-indigo-600 relative">
              <div className="absolute inset-0 bg-indigo-100 rounded-full transform -translate-y-2 scale-90 opacity-50"></div>
              <Upload size={64} className="mx-auto relative" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-800">Carica il tuo PDF</h3>
            <p className="text-slate-600 mb-5 max-w-md mx-auto">
              Trascina qui il tuo file o clicca per selezionarlo. Il tuo documento verrà trasformato in audio in pochi
              secondi.
            </p>
            <button
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors shadow-sm inline-flex items-center"
              onClick={(e) => {
                e.stopPropagation()
                handleUploadClick()
              }}
            >
              <Upload className="w-4 h-4 mr-2" />
              Seleziona file
            </button>
            <p className="text-sm text-slate-400 mt-4">Solo file PDF (max 10MB)</p>
          </div>
        )}

        {file && !isUploading && !isProcessing && (
          <div className="py-8">
            <div className="inline-flex items-center mb-5 px-4 py-2 bg-indigo-50 rounded-full">
              <FileText size={18} className="text-indigo-600 mr-2" />
              <span className="font-medium text-indigo-700">{file.name}</span>
              <CheckCircle2 size={16} className="text-emerald-500 ml-2" />
            </div>
            <p className="text-slate-600 mb-5">Il file è pronto per essere convertito in audio</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleConvertClick();
              }}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors shadow-md"
            >
              Converti in Audio
            </button>
          </div>
        )}

        {isUploading && (
          <div className="py-8">
            <div className="mb-6">
              <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                <div className="bg-indigo-600 h-2.5 rounded-full animate-[progress_1.5s_ease-in-out_infinite]"></div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-800">Caricamento in corso</h3>
            <p className="text-slate-600">Stiamo caricando {file?.name}...</p>
          </div>
        )}
      </div>

      {isProcessing && <ProcessingStatus step={processingStep} />}

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
          <AlertCircle className="text-red-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  )
}
