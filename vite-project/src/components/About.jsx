import { motion } from "framer-motion";
import about1 from "../../medias/about1.jpg";
import about2 from "../../medias/about2.webp";
import about3 from "../../medias/about3.webp";
import about4 from "../../medias/about4.webp";

const about = [
  {
    title: "Redefining Aerial Intelligence",
    description:
      "VyomGarud is a cutting-edge UAV and drone-systems company dedicated to pushing the boundaries of autonomous flight. We engineer platforms that redefine modern aerial intelligence and operational capability.",
    imagePosition: "right",
    image: { about1 },
  },
  {
    title: "Mission-Focused Engineering",
    description:
      "Our mission is to equip defense forces, enterprises, and government agencies with the most reliable, intelligent, and adaptable aerial platforms on the market.",
    imagePosition: "left",
    image: { about2 },
  },
  {
    title: "Uncompromised Reliability",
    description:
      "Every UAV is designed to perform in high-risk, high-impact situations with hardened structures, redundant systems, and mission-proven endurance.",
    imagePosition: "right",
    image: { about3 },
  },
  {
    title: "Advanced Autonomy",
    description:
      "AI-driven navigation, perception, and decision systems reduce operator workload and dramatically increase mission success rates.",
    imagePosition: "left",
    image: { about4 },
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative bg-gradient-to-br from-orange-800/20 to-green-500/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Redefining Aerial Intelligence & Mission Autonomy.
            </span>
          </h2>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-32">
          {about.map((abt, key) => (
            <motion.div
              key={key}
              initial={{
                opacity: 0,
                x: abt.imagePosition === "left" ? -80 : 80,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${
                abt.imagePosition === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-300/20 to-gray-500/20 rounded-xl sm:rounded-2xl transition-all duration-500" />

                  <motion.div
                    className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 
                      rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border-orange-600/50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src={abt.image}
                      alt={abt.title}
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="flex-1 w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                  <h3 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                    {abt.title}
                  </h3>
                  <p className="text-gray-300 text-base text-xl sm:text-lg leading-relaxed">
                    {abt.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
