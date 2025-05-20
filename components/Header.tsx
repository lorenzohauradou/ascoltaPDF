import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between max-w-5xl">
        <Link href="/" className="flex items-center space-x-2.5">
          <div className="relative w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg shadow-md flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white">
              <path d="M7 18H17V16H7V18Z" fill="currentColor" />
              <path d="M17 14H7V12H17V14Z" fill="currentColor" />
              <path d="M7 10H11V8H7V10Z" fill="currentColor" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM5 5C5 4.44772 5.44772 4 6 4H14C16.7614 4 19 6.23858 19 9V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5Z"
                fill="currentColor"
              />
            </svg>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-[8px] text-white font-bold">♪</span>
            </span>
          </div>
          <div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">
              Ascolta<span className="text-indigo-600">PDF</span>
            </span>
            <div className="text-[10px] font-medium text-slate-500 -mt-1 tracking-wide uppercase">
              Ascolta i tuoi documenti
            </div>
          </div>
        </Link>

        <div className="hidden md:flex space-x-1 items-center">
          <Link href="#how-it-works" className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            Come Funziona
          </Link>
          <a 
            href="https://appuntoai.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors inline-flex items-center"
          >
            Funzionalità Avanzate <Sparkles className="w-3.5 h-3.5 ml-1.5 text-indigo-400" />
          </a>
          <button className="px-4 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors shadow-sm">
            Accedi
          </button>
        </div>
      </div>
    </header>
  )
}
