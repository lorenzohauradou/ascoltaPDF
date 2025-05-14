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
    name: "Marco Bianchi",
    role: "Studente",
    company: "Università di Milano",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "AudioPDF ha rivoluzionato il mio modo di studiare. Ora posso ascoltare i miei appunti mentre sono in palestra o in viaggio. Il risparmio di tempo è incredibile!",
    rating: 5,
  },
  {
    name: "Laura Rossi",
    role: "Content Manager",
    company: "Digital Media Group",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Utilizzo AudioPDF quotidianamente per convertire report e documenti. La qualità dell'audio è eccellente e l'interfaccia è intuitiva. Un servizio che consiglio vivamente.",
    rating: 5,
  },
  {
    name: "Alessandro Verdi",
    role: "Imprenditore",
    company: "Tech Solutions",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Come imprenditore sempre in movimento, AudioPDF mi permette di rimanere aggiornato sui documenti importanti anche quando non posso leggerli. Servizio impeccabile!",
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
