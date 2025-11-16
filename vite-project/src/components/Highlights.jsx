import { motion } from "framer-motion";
import high from "../../medias/highlights.png";
const highlights = [
  {
    title: "Mission-Critical Reliability",
    description:
      "Aircraft, avionics, and software co-designed for redundancy, health monitoring, and graceful degradation—so missions complete even when conditions don’t cooperate.",
  },
  {
    title: "Edge AI, Real-Time Decisions",
    description:
      "Onboard computer vision and sensor fusion enable target detection, tracking, and route optimisation without constant operator micromanagement.",
  },
  {
    title: "Secure by Design",
    description:
      "End-to-end encryption, hardened links, and flexible APIs to integrate with existing command, control, and intelligence systems.",
  },
];

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="relative py-20 px-10 sm:px-6 lg:px-8 overflow-hidden"
    >
      <img
        src={high}
        alt="Highlights Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <h2 className="bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text text-transparent">
              Why Defence Teams Choose VyomGarud
            </h2>
          </div>
        </div>

        <div className="space-y-16">
          {highlights.map((highlight, key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h3 className="text-3xl sm:text-4xl font-semibold text-gray-200 mb-4">
                {highlight.title}
              </h3>

              <p className="text-gray-400 text-lg sm:text-xl leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
