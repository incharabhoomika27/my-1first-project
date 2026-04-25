import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden border-b border-line">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:border-r lg:border-line lg:pr-12 py-12"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="meta-label"
          >
            BCA Graduate & Developer
          </motion.div>
          <h1 className="title-main">
            INCHARA<br />K S
          </h1>
          <div className="title-sub">Portfolio 2026</div>
          
          <div className="mt-16 flex flex-wrap gap-8">
            <div>
              <div className="meta-label">Location</div>
              <div className="text-sm font-medium">Tumkur, Karnataka</div>
            </div>
            <div>
              <div className="meta-label">Specialization</div>
              <div className="text-sm font-medium">Python & SQL</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-12">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-ink rounded-full font-bold uppercase text-xs tracking-widest flex items-center gap-2 transition-colors"
            >
              Get in touch <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border border-line text-ink rounded-full font-bold uppercase text-xs tracking-widest flex items-center gap-2 hover:bg-line transition-colors"
            >
              Download CV <Download size={16} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900 border border-line shadow-2xl">
            <img
              src="/profile.jpg"
              alt="Inchara K S"
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 px-6 py-3 bg-accent text-ink rounded-full font-bold uppercase text-[10px] tracking-widest">
            Available for hire
          </div>
        </motion.div>
      </div>
    </section>
  );
}
