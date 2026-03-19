const cases = [
  {
    id: 1,
    
    title: "Nutribox",
    description:
      "Plataforma desenvolvida para apresentar uma experiência moderna de delivery saudável, com navegação intuitiva, interface responsiva e organização clara das informações.",
    image:
      "/nutribox.jpg",
    technologies: ["React", "TypeScript", "Tailwind", "Node.js"],
    demo: "https://healty-food-delivery-frontend-pj03.vercel.app/",
    github: "https://github.com/Grupo-05-Turma-Javascript-12/healty-food-delivery-frontend-pj03-gp05-js12",
  },
  {
    id: 2,
   
    title: "Elevva RH",
    description:
      "Projeto voltado para gestão de recursos humanos, com foco em organização visual, experiência do usuário e estrutura pensada para facilitar o uso no dia a dia.",
    image:
      "/elevarh.jpg",
    technologies: ["React", "TypeScript", "Tailwind"],
    demo: "https://rh-frontend-grupo05-js12.vercel.app/",
    github: "https://github.com/Grupo-05-Turma-Javascript-12/rh-frontend-grupo05-js12",
  },
  {
    id: 3,
  
    title: "Portfólio Pessoal",
    description:
      "Projeto autoral criado para apresentar minha trajetória, projetos e habilidades de forma profissional, com foco em identidade visual, clareza e posicionamento digital.",
    image:
      "/portifolio.png",
    technologies: ["React", "TypeScript", "Tailwind"],
    demo: "#",
    github: "https://github.com/cesarhennrique/PortifolioCesarDev",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="bg-black/1 px-6 py-24 text-black">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-1xl">
        
          <h2 className="font-display text-4xl text-black font-medium leading-tight md:text-5xl">
            Projetos que unem estratégia, interface e desenvolvimento.
          </h2>

          <p className="mt-5 text-base leading-7 text-black/70">
            Uma seleção de projetos desenvolvidos com foco em experiência,
            organização visual e construção de soluções digitais funcionais.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-[28px] border border-black/5 bg-white backdrop-blur-sm transition duration-300"
            >
              <div className="overflow-hidden">
                <div className="p-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-56 w-full object-cover transition duration-500  rounded-[28px] border border-black/5"
                  />
                </div>
              </div>

              <div className="p-6">
             

                <h3 className="mt-3 text-2xl font-semibold text-black">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-900">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-black/10 px-3 py-1 text-xs text-gray-800 bg-black/2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-violet-300 px-4 py-2 text-sm font-medium text-black transition hover:bg-violet-200"
                  >
                    Ver projeto
                  </a>

                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition bg-black hover:bg-black/90"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}