import type React from "react"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg shadow-md flex items-center justify-center">
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
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-[8px] text-white font-bold">♪</span>
                </span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Audio<span className="text-indigo-400">PDF</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Trasforma i tuoi documenti PDF in audio di alta qualità. Ascolta i tuoi contenuti ovunque, in qualsiasi
              momento.
            </p>
            <div className="flex space-x-3">
              <SocialLink icon={<Facebook size={18} />} href="#" label="Facebook" />
              <SocialLink icon={<Twitter size={18} />} href="#" label="Twitter" />
              <SocialLink icon={<Instagram size={18} />} href="#" label="Instagram" />
              <SocialLink icon={<Linkedin size={18} />} href="#" label="LinkedIn" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="Home" />
              <FooterLink href="#" label="Come Funziona" />
              <FooterLink href="#" label="Prezzi" />
              <FooterLink href="#" label="Blog" />
              <FooterLink href="#" label="Chi Siamo" />
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legale</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="Termini di Servizio" />
              <FooterLink href="#" label="Privacy Policy" />
              <FooterLink href="#" label="Cookie Policy" />
              <FooterLink href="#" label="GDPR" />
              <FooterLink href="#" label="Accessibilità" />
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>info@audiopdf.it</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>+39 02 1234567</span>
              </li>
              <li className="mt-4">
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors text-sm">
                  Contattaci
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} AudioPDF. Tutti i diritti riservati.</p>
          <div className="mt-4 md:mt-0">Made with ❤️</div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="w-8 h-8 bg-slate-800 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-colors"
    >
      {icon}
    </Link>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="hover:text-indigo-400 transition-colors">
        {label}
      </Link>
    </li>
  )
}
