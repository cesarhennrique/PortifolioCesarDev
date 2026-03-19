import { Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="bg-black/1 px-6 py-24 text-black">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        {/* lado esquerdo */}
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <MessageCircle size={16} className="text-green-500" />
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-600">
              Disponível para conversar sobre novos projetos
            </p>
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Vamos transformar sua ideia em um <span className="text-blue-600">projeto digital bem estruturado.</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
            Se você tem uma ideia, precisa de uma presença digital melhor ou
            quer tirar um projeto do papel com mais clareza e profissionalismo,
            podemos conversar sobre a melhor forma de construir isso.
          </p>

          <a
            href="mailto:dev.cesarhenrique@gmail.com"
            className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Entrar em contato
          </a>
        </div>

        {/* lado direito */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-6 flex h-28 w-40 items-center justify-center rounded-full ">
            <img src="/logosemfundo.png" alt="" />
          </div>

          <p className="text-sm text-neutral-600">
            Você também pode me encontrar por aqui
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
            <a
              href="https://www.linkedin.com/in/cesarhennrique/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-black/70"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a
              href="https://github.com/cesarhennrique"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-black/70"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://www.instagram.com/dev.cesarhenrique"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-black/70"
            >
              <Instagram size={18} />
              Instagram
            </a>
          </div>

          <a
            href="mailto:dev.cesarhenrique@gmail.com"
            className="mt-6 flex items-center gap-2 text-base text-neutral-700 transition hover:text-black"
          >
            <Mail size={18} />
            dev.cesarhenrique@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
