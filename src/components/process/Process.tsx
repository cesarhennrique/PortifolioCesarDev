

const processSteps = [
  {
    number: "01",
    title: "Entendimento",
    description:
      "Cada projeto começa com clareza. Busco entender a proposta, o objetivo da solução, o público e os pontos mais importantes para que o desenvolvimento tenha direção desde o início.",
  },
  {
    number: "02",
    title: "Planejamento",
    description:
      "Com a ideia bem definida, organizo a estrutura do projeto, penso na experiência do usuário e defino um caminho de construção que una estética, lógica e funcionalidade.",
  },
  {
    number: "03",
    title: "Construção",
    description:
      "É aqui que a solução ganha forma. Desenvolvo interfaces e funcionalidades com foco em responsividade, organização do código e uma navegação clara e eficiente.",
  },
  {
    number: "04",
    title: "Ajustes e entrega",
    description:
      "Na etapa final, reviso os detalhes, faço refinamentos visuais e técnicos e preparo o projeto para apresentação, publicação ou próximos passos.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="bg-black/95 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-4xl">
        
          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Um processo claro para transformar ideias em projetos digitais.
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-400">
            Cada etapa é pensada para unir organização, boa execução e resultado
            visual, mantendo o projeto alinhado desde a ideia inicial até a entrega.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="rounded-3xl border border-white/10 bg-white/3 p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <span className="text-sm text-blue-500">{step.number}</span>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                  
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-2">
          <p className="text-sm leading-7 text-gray-400">
            Mais do que desenvolver telas, meu foco é construir soluções com
            clareza, estrutura e propósito, sempre buscando equilíbrio entre
            experiência visual e funcionamento prático.
          </p>

          <p className="text-sm leading-7 text-gray-400">
            Esse processo me ajuda a conduzir projetos com mais direção e também
            facilita a comunicação durante cada etapa, tornando a construção mais
            objetiva e profissional.
          </p>
        </div>
      </div>
    </section>
  );
}