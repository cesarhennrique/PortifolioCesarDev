import { Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-16 text-white">
      <div className="mx-auto max-w-6xl">
        {/* topo */}
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 md:flex-row md:justify-between">
          
          {/* redes */}
          <div className="flex gap-4 m-auto">
            <a
              href="https://www.linkedin.com/in/cesarhennrique/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 p-3 hover:border-white/40 transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://github.com/cesarhennrique"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 p-3 hover:border-white/40 transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://instagram.com/dev.cesarhenrique"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 p-3 hover:border-white/40 transition"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} Cesar Henrique. Todos os direitos reservados.</p>

          <p className="text-neutral-600">
            Desenvolvido com React, TypeScript e Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}