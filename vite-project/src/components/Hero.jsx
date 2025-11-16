import { motion } from "framer-motion";
import HeroVideo from "../../medias/HeroVideo.mp4";
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[80vh] sm:h-screen overflow-hidden"
    >
      <motion.video
        src={HeroVideo}
        autoPlay
        loop
        muted
        initial={{ scale: 1 }}
        animate={{ scale: 1.15 }}
        transition={{ duration: 15, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center px-4"
        >
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight space-y-2">
            <h2 className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Precision UAV Technology
            </h2>

            <h2 className="bg-gradient-to-b from-orange-400 to-green-400 bg-clip-text text-transparent">
              for Critical Missions
            </h2>
          </div>

          <h3 className="mt-4 text-xl sm:text-2xl bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
            Engineering Intelligence in the Sky
          </h3>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 rounded-xl bg-white text-black font-semibold text-lg shadow-lg hover:bg-gray-200 transition-all">
              <a href="#products">
                <p>Explore Our UAV Fleet</p>
              </a>
            </button>

            <button className="px-8 py-3 rounded-xl border border-white/70 text-white font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all">
              <a href="#contact">
                <p>Speak to a Defense Consultant</p>
              </a>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
