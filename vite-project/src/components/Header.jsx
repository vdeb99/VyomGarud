import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header({ scrolled }) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800"
          : "bg-slate-950/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <a className="flex items-center space-x-1 group cursor-pointer" href="#">
            <div>
              <img
                src="../../medias/VyomGarudLogo.png"
                alt="VyomGarud"
                className="w-30 h-30 sm:w-15 sm:h-15 border-white border-2 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-200"
                
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium ">
              <h1 className="text-white">Vyom</h1>
              <h1 className="text-orange-400">Garud</h1>
            </span>
          </a>

          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              <h3>About</h3>
            </a>
            <a
              href="#products"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              <h3>Products</h3>
            </a>
            <a
              href="#highlights"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              <h3>Highlights</h3>
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              <h3>Contact</h3>
            </a>
          </div>

          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuIsOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4 text-center">
            <a
              href="#about"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              <h3>About</h3>
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              <h3>Products</h3>
            </a>
            <a
              href="#highlights"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              <h3>Highlights</h3>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              <h3>Contact</h3>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}