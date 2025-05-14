import { Suspense } from "react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import FileUploader from "@/components/FileUploader"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import Pricing from "@/components/Pricing"
import Footer from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 overflow-x-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-indigo-50/70 to-transparent pointer-events-none"></div>
      <Toaster />
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-5xl relative">
        <Hero />
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Caricamento...</div>}>
          <FileUploader />
        </Suspense>
        <Testimonials />
        <FAQ />
        <Pricing />
      </div>
      <Footer />
    </main>
  )
}
