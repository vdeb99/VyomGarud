import { useState } from "react";

export default function Highlights() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-10 sm:px-6 lg:px-8 overflow-hidden"
    >
      <img
        src="../../medias/contact.webp"
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text text-transparent">
              Ready for a Mission Briefing?
            </span>
          </h2>
        </div>

        {submitted && (
          <div className="mb-8 p-4 text-center text-lg font-semibold bg-green-700/80 text-white rounded-xl shadow-xl">
            ✔️ Message Sent! Our team will contact you shortly.
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-semibold text-gray-200 mb-6 leading-snug">
              Share your requirements and our team will respond with a tailored UAV
              solution overview, timelines, and engagement model.
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              Whether you're exploring reconnaissance UAVs, tactical drones,
              custom payload integrations, or enterprise deployment —
              we provide detailed technical insights, mission planning, and
              next-step recommendations.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-black/50 border border-gray-700 p-8 rounded-2xl shadow-2xl"
          >
            <div className="mb-6">
              <label className="block text-gray-400 mb-2 text-sm">Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-gray-200 
                focus:outline-none focus:border-orange-500"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-400 mb-2 text-sm">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-gray-200 
                focus:outline-none focus:border-orange-500"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-400 mb-2 text-sm">Message</label>
              <textarea
                rows="4"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-gray-200 
                focus:outline-none focus:border-orange-500"
                placeholder="Tell us your mission requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg transition-all"
            >
              <p>Request Mission Briefing</p>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
