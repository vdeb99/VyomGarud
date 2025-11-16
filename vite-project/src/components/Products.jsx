import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Circle } from "lucide-react";
import uav1 from "../../medias/uav1.avif";
import uav2 from "../../medias/uav2.webp";
import uav3 from "../../medias/uav3.jpg";
import uav4 from "../../medias/uav4.jxl";
const products = [
  {
    title: "VG-Raven Tactical UAV",
    description: "Long-endurance ISR drone built for harsh terrain.",
    image: uav1,
    details: [
      "Flight Time: 12 hours",
      "Range: 60 km",
      "Payloads: EO/IR, SAR, Communication Relay",
      "Mission Profile: ISR, Border Patrol, Tactical Recon",
    ],
  },
  {
    title: "VG-Astra AI Recon",
    description: "Autonomous mapping and target tracking.",
    image: uav2,
    details: [
      "Edge AI: Onboard detection + tracking",
      "Autonomy: Waypoint navigation",
      "Sensors: EO/IR + LiDAR",
      "Mission Profile: Recon, Target Tracking, Terrain Mapping",
    ],
  },
  {
    title: "VG-Falcon Heavy-Lift",
    description: "Designed for logistics & precision supply drops.",
    image: uav3,
    details: [
      "Payload: 20–35 kg",
      "BVLOS: Supported",
      "Drop System: Modular cargo release",
      "Mission Profile: Logistics, Resupply, Tactical Delivery",
    ],
  },
  {
    title: "VG-Nano Stealth Scout",
    description: "Silent micro-UAV for stealth reconnaissance.",
    image: uav4,
    details: [
      "Ultra-low noise propulsion",
      "Night Ops Ready",
      "Micro EO/IR Sensor",
      "Mission Profile: Indoor Ops, Covert Recon",
    ],
  },
];

export default function Products() {
  const [activeCard, setActiveCard] = useState(null);

  const openDetails = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section
      id="products"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative bg-gradient-to-br from-orange-800/20 to-gray-300/20"
    >
      <div className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-center">
        <h2 className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
          Platforms & Capabilities
        </h2>
      </div>

      <div className="carousel-wrapper overflow-hidden w-full py-10">
        <div className="flex gap-10 animate-scroll whitespace-nowrap">
          {[...products, ...products].map((item, i) => {
            const realIndex = i % products.length;

            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative group min-w-[360px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-300/20 to-gray-500/20 rounded-2xl" />

                <motion.div
                  className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 
                  rounded-2xl p-5 shadow-xl overflow-hidden group-hover:border-orange-600/50"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-xl mb-4 shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <button
                    onClick={() => openDetails(realIndex)}
                    className="w-full py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm transition-all"
                  >
                    {activeCard === realIndex ? "Hide Details" : "Learn More"}
                  </button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeCard !== null && (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-16 border border-gray-700/50 p-10 rounded-2xl 
      max-w-5xl mx-auto shadow-2xl text-gray-200 backdrop-blur-md
      relative bg-gradient-to-br from-orange-300/20 to-green-800/20
      hover:from-green-800/30 hover:to-orange-300/30 transition-all"
          >
            <h3 className="text-4xl font-bold text-white mb-6">
              {products[activeCard].title}
            </h3>

            <motion.img
              src={products[activeCard].image}
              alt={products[activeCard].title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="
                  w-full 
                  h-48        
                  sm:h-64     
                  md:h-72     
                  lg:h-80     
                  xl:h-96     
                  object-cover 
                  rounded-xl 
                  shadow-xl 
                  mb-6
                "
            />

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-3 text-gray-300 text-lg"
            >
              {products[activeCard].details.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Circle size={16} className="text-orange-400 mt-1" />
                  <p>{point}</p>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
