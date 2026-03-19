import { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";

const faqItems = [
  {
    question: "Você desenvolve apenas o layout ou também a aplicação completa?",
    answer:
      "Posso atuar tanto na construção da interface quanto no desenvolvimento completo da aplicação, dependendo da necessidade do projeto. O foco é entregar uma solução funcional, bem estruturada e com boa experiência de uso.",
  },
  {
    question: "Posso te procurar mesmo sem ter tudo definido?",
    answer:
      "Sim. Muitas ideias começam ainda em fase inicial, e isso não é um problema. Posso ajudar a organizar melhor a proposta, entender o objetivo do projeto e transformar essa ideia em um caminho mais claro para execução.",
  },
  {
    question: "Que tipo de projeto você desenvolve?",
    answer:
      "Atuo principalmente com landing pages, portfólios, interfaces web, sistemas front-end e aplicações personalizadas para presença digital ou apresentação de serviços. Cada projeto é pensado de acordo com o objetivo e o contexto de uso.",
  },
  {
    question: "Você também pode atualizar um projeto que já existe?",
    answer:
      "Sim. Caso você já tenha um site, sistema ou interface criada, posso ajudar com melhorias visuais, ajustes de responsividade, reorganização de estrutura e evolução da experiência do usuário.",
  },
  {
    question: "Como funciona o prazo de entrega?",
    answer:
      "O prazo varia conforme a complexidade, a quantidade de páginas, funcionalidades e nível de personalização do projeto. Antes de iniciar, alinham-se escopo, expectativa e uma estimativa de tempo para conduzir tudo com mais clareza.",
  },
  {
    question: "Como posso solicitar um orçamento?",
    answer:
      "Você pode entrar em contato pelos links disponíveis no portfólio e me enviar uma mensagem com a ideia do projeto, objetivo, referências e o que espera desenvolver. A partir disso, consigo analisar melhor a demanda e dar um direcionamento inicial.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleFaq(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section id="faq" className="bg-[#f3f3f3] px-6 py-24 text-black">
      <div className="mx-auto grid max-w-6xl gap-32 md:grid-cols-[0.9fr_1.1fr]">
        {/* lado esquerdo */}
        <div className="max-w-md">
       
          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-3xl">
            Dúvidas frequentes sobre meu trabalho e os projetos que desenvolvo.
          </h2>

          <p className="mt-5 text-base leading-7 text-neutral-600">
            Separei algumas respostas para tornar o processo mais claro, objetivo
            e transparente desde o primeiro contato.
          </p>

          <div className="mt-8 rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold tracking-tight">
              Prefere falar diretamente?
            </h3>

            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Se fizer mais sentido para você, também é possível entrar em contato
              de forma direta para conversar sobre ideias, ajustes ou novos projetos.
            </p>

            <a
              href="mailto:seuemail@gmail.com"
              className="mt-5 flex gap-2 items-center text-sm font-medium text-blue-600 "
            ><Mail size={18} />
              dev.cesarhenrique@gmail.com
            </a>
          </div>
        </div>

        {/* lado direito */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-[20px] border border-black/10 bg-white"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="pr-6 text-lg font-medium leading-7">
                    {item.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-7 text-neutral-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}