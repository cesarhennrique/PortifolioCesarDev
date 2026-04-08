export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home">
          <img
            className="h-12 w-auto object-contain"
            src="/logosemfundo.png"
            alt=""
          />
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
            Sobre mim
          </a>
          <a
            href="#cases"
            className="text-sm font-medium text-white transition hover:text-gray-300"
          >
            Cases
          </a>
          <a
            href="#contato"
            className="text-sm font-medium text-white transition hover:text-gray-300"
          >
            Contato
          </a>
        </nav>

        <a
          href="https://drive.google.com/file/d/1XbC3XsgsQtqHtnK33B1SVYH3-ae0z4M4/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="rounded-full  px-5 py-2 text-sm font-medium text-white transition"
        >
          
        </a>
      </div>
    </header>
  );
}
