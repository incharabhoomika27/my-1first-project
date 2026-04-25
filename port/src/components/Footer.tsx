import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="text-left">
          <div className="meta-label">Portfolio 2026</div>
          <h3 className="text-6xl font-black tracking-tighter uppercase mb-4">INCHARA<span className="text-accent">.</span></h3>
          <p className="text-[10px] uppercase tracking-widest text-muted">© {new Date().getFullYear()} Inchara K S. All rights reserved.</p>
        </div>

        <div className="flex flex-col items-end gap-6">
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all">
              <Github size={18} />
            </a>
            <a href="#" className="w-12 h-12 border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all">
              <Linkedin size={18} />
            </a>
            <a href="mailto:incharabhoomika@gmail.com" className="w-12 h-12 border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all">
              <Mail size={18} />
            </a>
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted font-bold">
            Built with React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}
