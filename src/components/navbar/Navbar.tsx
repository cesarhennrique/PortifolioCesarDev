

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-black backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-white font-bold text-lg">
          Cesar.dev
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-sm text-white">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#sobre" className="hover:text-gray-300">Sobre</a>
          <a href="#projetos" className="hover:text-gray-300">Projetos</a>
          <a href="#contato" className="hover:text-gray-300">Contato</a>
        </nav>

        {/* Botão */}
        <button className="border border-white/20 text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
          Currículo ↓
        </button>
      </div>
    </header>
  );
}