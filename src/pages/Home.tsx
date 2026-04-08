import { useEffect, useState } from 'react'

const tags = ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Next.js', 'Git']

export default function Home() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-black text-white py-24 pt-32">

      {/* Grid de fundo sutil */}
      <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px'}} />

      {/* Glow central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10" style={{background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)'}} />

      {/* Conteúdo central */}
      <div className={`relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center px-6 gap-7 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Status disponível */}
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm mt-14">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[11px] font-light tracking-[2px] text-gray-400 uppercase">Disponível para projetos</span>
        </div>

        {/* Título */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
          Aplicações que unem performance{' '}
          
          e usabilidade.
        </h1>

        {/* Descrição */}
        <p className="max-w-lg text-base leading-relaxed tracking-[1px] text-gray-400">
          Desenvolvedor Full Stack construindo produtos digitais com foco em experiência, código limpo e resultado real.
        </p>

        {/* Botões */}
        <div className={`flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a href="#contato" className="rounded-full bg-white text-black px-6 py-3 text-[14px] font-semibold text-center hover:bg-gray-200 transition-all duration-300 hover:scale-105">Falar comigo</a>
          <a href="#cases" className="rounded-full border border-white/20 text-white px-6 py-3 text-[14px] font-semibold text-center hover:bg-white hover:text-black transition-all duration-300">Ver projetos</a>
        </div>

      </div>

      {/* Carrossel — centralizado entre botões e scroll */}
      <div className="relative z-10 w-full max-w-lg overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10" style={{background: 'linear-gradient(to right, black, transparent)'}} />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10" style={{background: 'linear-gradient(to left, black, transparent)'}} />
        <div className="flex gap-8 w-max" style={{animation: 'scroll-tags 14s linear infinite'}}>
          {[...tags, ...tags].map((tag, i) => (
            <span key={i} className="text-[11px] text-gray-600 whitespace-nowrap tracking-[1px] uppercase">{tag}</span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex flex-col items-center gap-2">
        <div className="w-px h-8 bg-white/20 animate-pulse" />
        <span className="text-xs text-gray-600 tracking-widest uppercase">scroll</span>
      </div>

    </section>
  )
}