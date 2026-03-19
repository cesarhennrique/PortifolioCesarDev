export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/10 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-lg font-semibold tracking-wide text-white transition hover:text-gray-300"
        >
          Cesar.dev
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-white transition hover:text-gray-300"
          >
            Início
          </a>
          <a
            href="#sobre"
            className="text-sm font-medium text-white transition hover:text-gray-300"
          >
            Sobre
          </a>
          <a
            href="#projetos"
            className="text-sm font-medium text-white transition hover:text-gray-300"
          >
            Projetos
          </a>
          <a
            href="#contato"
            className="text-sm font-medium text-white transition hover:text-gray-300"
          >
            Contato
          </a>
        </nav>

        <a
          href="/curriculo.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
        >
          Currículo ↓
        </a>
      </div>
    </header>
  );
}