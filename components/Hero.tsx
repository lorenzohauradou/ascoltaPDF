export default function Hero() {
  return (
    <section className="text-center py-14 md:py-20">
      <div className="mx-auto max-w-2xl relative">
        <div className="absolute -top-14 -left-14 w-28 h-28 bg-indigo-100 rounded-full blur-3xl opacity-70 -z-10"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-70 -z-10"></div>

        <div className="inline-block mb-3 px-3 py-1 bg-indigo-100/80 text-indigo-600 text-sm font-medium rounded-full">
          Tecnologia d'avanguardia
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight leading-tight">
          Dai <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Voce</span>{" "}
          ai Tuoi PDF
        </h1>

        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
          Trasforma i tuoi documenti in audio di alta qualità con una voce naturale e chiara. Ascolta ovunque, in
          qualsiasi momento.
        </p>

        <div className="flex flex-wrap items-center justify-center mt-6 gap-3">
          <div className="flex -space-x-2">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="Avatar"
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            />
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="Avatar"
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            />
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="Avatar"
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            />
          </div>
          <div className="text-sm text-slate-600">
            Più di <span className="font-semibold">2.500+</span> utenti soddisfatti
          </div>
        </div>
      </div>
    </section>
  )
}
