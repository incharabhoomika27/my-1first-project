import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Demo only)");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-bg border-b border-line">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <div className="meta-label">Get in touch</div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-12"
            >
              Contact
            </motion.h2>

            <div className="space-y-12">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 border border-line flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-ink transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="meta-label">Email</p>
                  <a href="mailto:incharabhoomika@gmail.com" className="text-2xl font-bold uppercase tracking-tighter hover:text-accent transition-colors">
                    incharabhoomika@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 border border-line flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-ink transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="meta-label">Phone</p>
                  <a href="tel:+917026588612" className="text-2xl font-bold uppercase tracking-tighter hover:text-accent transition-colors">
                    +91 7026588612
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 border border-line flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-ink transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="meta-label">Location</p>
                  <p className="text-2xl font-bold uppercase tracking-tighter">Tumkur, Karnataka</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 border border-line relative"
          >
            <div className="absolute top-0 right-0 px-4 py-2 bg-accent text-ink text-[10px] font-bold uppercase tracking-widest">
              Available for hire
            </div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <label className="meta-label">Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-transparent border-b border-line py-4 text-xl font-bold uppercase tracking-tighter outline-none focus:border-accent transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-4">
                <label className="meta-label">Email</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-transparent border-b border-line py-4 text-xl font-bold uppercase tracking-tighter outline-none focus:border-accent transition-colors"
                  placeholder="Your Email"
                />
              </div>
              <div className="space-y-4">
                <label className="meta-label">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-transparent border-b border-line py-4 text-xl font-bold uppercase tracking-tighter outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                className="w-full py-6 bg-accent text-ink font-black uppercase tracking-[0.2em] text-sm hover:bg-white transition-colors flex items-center justify-center gap-4"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
