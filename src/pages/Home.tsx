export default function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white"
    >
    

      {/* blocos decorativos */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/2 top-20 -translate-x-24">
          <div className="bg-float-one h-40 w-24 rounded-md bg-white/20 blur-md" />
        </div>

        <div className="absolute left-1/2 top-16 translate-x-6">
          <div className="bg-float-two h-72 w-28 rounded-md bg-white/10 blur-md" />
        </div>

        <div className="absolute left-1/2 top-40 -translate-x-40">
          <div className="bg-float-one h-96 w-20 rounded-md bg-white/10 blur-md" />
        </div>

        <div className="absolute left-1/2 top-44 translate-x-40">
          <div className="bg-float-two h-80 w-20 rounded-md bg-white/10 blur-md" />
        </div>
      </div>

      {/* conteúdo */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="mb-6 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm">
          Desenvolvedor Full Stack
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight">
          Criando aplicações que unem performance e usabilidade.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
          Desenvolvedor Full Stack em evolução, criando projetos reais com foco
          em performance, organização de código e experiências digitais que fazem
          sentido para o usuário.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contato"
            className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-white hover:text-black"
          >
            Falar comigo
          </a>

          <a
            href="#cases"
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:scale-105 hover:opacity-90"
          >
            Ver projetos
          </a>
        </div>
      </div>
    </section>
  );
}