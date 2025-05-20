import { ArrowUpRight } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="fixed top-1/2 right-0 transform -translate-y-1/2 z-40 m-4 md:m-6">
      <div className="bg-white p-3 md:p-4 rounded-xl shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow duration-300">
        <a
          href="https://appuntoai.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg font-semibold text-sm transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
          aria-label="Visita AppuntoAI"
        >
          <span className="hidden sm:inline">Visita AppuntoAI</span>
          <span className="sm:hidden">AppuntoAI</span> {/* Testo più corto per mobile */}
          <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:rotate-45" />
        </a>
      </div>
    </aside>
  );
} 