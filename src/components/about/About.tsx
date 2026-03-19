import { Github, Linkedin, Mail } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="bg-[#f3f3f3] px-6 py-24 text-black">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* imagem */}
        <div className="flex justify-center md:justify-start">
          <img
            src="public/fotocesar.jpg"
            alt="Foto de Cesar Henrique"
            className="h-180 w-full max-w-117.5 rounded-[28px] object-cover shadow-sm"
          />
        </div>

        {/* conteúdo */}
        <div className="max-w-xl">
          <p className="mb-2 text-base text-black">
            Prazer
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-6xl font-semibold tracking-tight leading-tight">Cesar Henrique</h1>

          <h2 className="font-display text-3xl leading-tight md:text-2xl">
            Desenvolvedor Full Stack
          </h2>

          <p className="mt-4 text-lg font-medium text-neutral-700">
            Tecnologia, estratégia e execução para projetos digitais.
          </p>

          <p className="mt-4 text-base leading-8 text-neutral-700">
            Após anos de atuação no setor financeiro, direcionei minha trajetória
            para a tecnologia com o objetivo de construir soluções digitais que
            entreguem valor real. Essa transição trouxe uma base importante de
            responsabilidade, análise, comunicação e foco em resultado, que hoje
            aplico no desenvolvimento de interfaces, aplicações web e projetos
            personalizados.
          </p>

          <p className="mt-4 text-base leading-8 text-neutral-700">
            Trabalho com tecnologias como React, TypeScript, Node.js e Tailwind
            CSS para criar experiências modernas, responsivas e bem organizadas.
            Meu foco é desenvolver produtos com clareza visual, boa usabilidade
            e estrutura sólida, seja para compor times de tecnologia ou para
            tirar projetos do papel com mais profissionalismo.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium">
            <a
              href="https://www.linkedin.com/in/cesarhennrique/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-neutral-800 transition hover:text-black"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a
              href="https://github.com/cesarhennrique"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-neutral-800 transition hover:text-black"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="dev.cesarhenrique@gmail.com"
              className="flex items-center gap-2 text-neutral-800 transition hover:text-black"
            >
              <Mail size={18} />
              E-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}