const cases = [
    {
    id: 1,
    title: "Ubixy - Empresa de Tecnologia",
    description:
      "empresa de tecnologia que desenvolve sistemas SaaS, plataformas web e soluções digitais para empresas de diversos setores, com foco em inovação, eficiência e experiência do usuário.",
    image: "/urbixy.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
    ],
    demo: "https://www.urbixy.com.br/",
  },
  {
    id: 2,
    title: "Invixy - Sistema de Gestao de Estoque",
    description:
      "O sistema de controle de estoque mais simples do Brasil. Feito para pequenos empreendedores que querem organizar, reduzir prejuízos e crescer.",
    image: "/invixy.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "Node.js",
      `Supabase`,
    ],
    demo: "https://www.invixy.com.br/",
  },

  {
    id: 3,
    title: "Conecta Gravata",
    description:
      "Guia local para cidade de Gravataí, com informações sobre comércio, serviços e eventos, focado em experiência do usuário e design responsivo.",
    image: "/conectagravata.png",
    technologies: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    demo: "https://www.conectagravata.com.br/",
    github: "https://github.com/cesarhennrique/conectaGravata",
  },
  {
    id: 4,
    title: "VA Arquitetura",
    description:
      "Site institucional com portfólio interativo e formulário integrado ao WhatsApp.",
    image: "/vaarquitetura.png",
    technologies: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    demo: "https://va-arquitetura.vercel.app/",
    github: "https://github.com/cesarhennrique/va-arquitetura",
  },
  {
    id: 5,
    title: "Nutribox",
    description:
      "Plataforma de delivery saudável com navegação intuitiva e interface responsiva.",
    image: "/nutribox.jpg",
    technologies: ["React", "TypeScript", "Tailwind", "Node.js"],
    demo: "https://healty-food-delivery-frontend-pj03.vercel.app/",
    github:
      "https://github.com/Grupo-05-Turma-Javascript-12/healty-food-delivery-frontend-pj03-gp05-js12",
  },
  {
    id: 6,
    title: "Elevva RH",
    description:
      "Sistema de gestão de recursos humanos com foco em organização visual e UX.",
    image: "/elevarh.jpg",
    technologies: ["React", "TypeScript", "Tailwind"],
    demo: "https://rh-frontend-grupo05-js12.vercel.app/",
    github:
      "https://github.com/Grupo-05-Turma-Javascript-12/rh-frontend-grupo05-js12",
  },
  {
    id: 7,
    title: "Portfólio Pessoal",
    description:
      "Site autoral para apresentar trajetória, projetos e habilidades de forma profissional.",
    image: "/portifolio.png",
    technologies: ["React", "TypeScript", "Tailwind"],
    demo: "#",
    github: "https://github.com/cesarhennrique/PortifolioCesarDev",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-medium tracking-[3px] text-gray-400 uppercase">
            Cases
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight text-black">
            Projetos que unem estratégia, interface e desenvolvimento.
          </h2>
          <p className="mt-4 text-sm leading-6 text-gray-500">
            Uma seleção de projetos com foco em experiência, organização visual
            e soluções digitais funcionais.
          </p>
        </div>

        {/* Grid 3 colunas */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-xl border border-black/8 bg-gray-50 hover:border-black/15 hover:shadow-sm transition-all duration-300"
            >
              {/* Imagem compacta */}
              <div className="overflow-hidden mx-4 mt-4 rounded-lg bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Conteúdo compacto */}
              <div className="p-4">
                <h3 className="text-base font-semibold text-black">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-gray-500">
                  {item.description}
                </p>

                {/* Tecnologias */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-black/10 px-2.5 py-0.5 text-[11px] text-gray-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botões */}
                <div className="mt-4 flex gap-2">
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-black px-4 py-1.5 text-xs font-medium text-white hover:bg-gray-800 transition-all duration-300"
                  >
                    Ver projeto
                  </a>
                  {item.github !== "#" && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-black/15 px-4 py-1.5 text-xs font-medium text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
