import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import logo from "../../medias/logo.png";
export default function Footer() {
  return (
    <footer className="bg-black relative border-t border-white/10 pt-16 pb-10 px-6 sm:px-10 lg:px-20">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-green-600/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <a
            className="flex items-center space-x-1 group cursor-pointer"
            href="#"
          >
            <div>
              <img
                src={logo}
                alt="VyomGarud"
                className="w-30 h-30 sm:w-15 sm:h-15 border-white border-2 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium ">
              <h1 className="text-white">Vyom</h1>
              <h1 className="text-orange-400">Garud</h1>
            </span>
          </a>
          <p className="text-gray-400 mt-4 leading-relaxed">
            Precision-engineered UAV platforms for defence, intelligence, and
            mission-critical operations.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="text-gray-400 hover:text-orange-500 transition-all"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-orange-500 transition-all"
            >
              <Instagram size={22} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-orange-500 transition-all"
            >
              <Facebook size={22} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-orange-500 transition-all cursor-pointer">
              <p>About</p>
            </li>
            <li className="hover:text-orange-500 transition-all cursor-pointer">
              <p>Products</p>
            </li>
            <li className="hover:text-orange-500 transition-all cursor-pointer">
              <p>Capabilities</p>
            </li>
            <li className="hover:text-orange-500 transition-all cursor-pointer">
              <p>Contact</p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Platforms</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-orange-500 transition-all cursor-pointer">
              <p>Tactical Drones</p>
            </li>
            <li className="hover:text-orange-500 transition-all cursor-pointer">
              <p>Recon UAVs</p>
            </li>
            <li className="hover:text-orange-500 transition-all cursor-pointer">
              <p>Heavy-Lift Platforms</p>
            </li>
            <li className="hover:text-orange-500 transition-all cursor-pointer">
              <p>Stealth Micro-UAVs</p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>

          <div className="flex items-start gap-3 text-gray-400 mb-4">
            <MapPin size={20} className="text-orange-500" />
            <p>
              Sector 21, Bengaluru
              <br />
              Karnataka, India
            </p>
          </div>

          <div className="flex items-start gap-3 text-gray-400 mb-4">
            <Phone size={20} className="text-orange-500" />
            <p>+91 88888 88888</p>
          </div>

          <div className="flex items-start gap-3 text-gray-400">
            <Mail size={20} className="text-orange-500" />
            <p>contact@vyomgarud.in</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-12 pt-6 border-t border-white/10 text-center text-gray-500 text-sm text">
        © {new Date().getFullYear()}{" "}
        <p>VyomGarud Defence Systems • All Rights Reserved</p>
      </div>
    </footer>
  );
}
