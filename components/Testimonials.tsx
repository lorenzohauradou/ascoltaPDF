import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="py-16 relative">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="text-center mb-12">
        <div className="inline-block mb-3 px-3 py-1 bg-indigo-100/80 text-indigo-600 text-sm font-medium rounded-full">
          Testimonianze
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Cosa dicono i nostri utenti</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Scopri come AudioPDF sta trasformando il modo in cui le persone consumano i contenuti PDF.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  )
}

interface Testimonial {
  name: string
  role: string
  company: string
  image: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: "Sofia Romano",
    role: "Studente",
    company: "Università La Sapienza",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Uso AudioPDF per ripassare gli appunti delle lezioni mentre vado all'università o quando faccio una pausa. Mi aiuta a sfruttare meglio il tempo, anche se a volte devo riascoltare i passaggi più tecnici. Comunque utile.",
    rating: 5,
  },
  {
    name: "Davide Esposito",
    role: "Content Manager",
    company: "Creative Web Solutions",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "AudioPDF è diventato uno strumento fisso nel mio workflow per trasformare lunghi report in audio. La qualità della voce sintetica è buona, e l'upload dei file è semplice. Mi fa risparmiare tempo quando devo rivedere molti documenti.",
    rating: 5,
  },
  {
    name: "Elena Moretti",
    role: "Imprenditore",
    company: "Innovatech Srl",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Gestendo un'azienda, ho spesso poco tempo per leggere. AudioPDF mi dà la possibilità di ascoltare contratti o proposte mentre mi sposto tra un appuntamento e l'altro. Non sostituisce una lettura attenta per i dettagli cruciali, ma è ottimo per una prima revisione.",
    rating: 4,
  },
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative">
        <div className="flex items-center mb-4">
          <img
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div className="ml-4">
            <h3 className="font-semibold text-slate-800">{testimonial.name}</h3>
            <p className="text-sm text-slate-500">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>

        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-slate-300"}`}
            />
          ))}
        </div>

        <p className="text-slate-600 italic">"{testimonial.content}"</p>
      </div>
    </div>
  )
}
