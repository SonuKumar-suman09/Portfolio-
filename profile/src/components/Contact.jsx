import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, Clock, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState({ loading: false, ok: null, message: "" });
  const { theme } = useTheme();

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    
    try {
      setStatus({ loading: true, ok: null, message: "" });
      
      // Add timeout to prevent hanging
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      
      const apiUrl = import.meta.env.VITE_API_URL || '/api';
      const res = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      
      const data = await res.json().catch(() => ({ ok: res.ok }));
      setStatus({ 
        loading: false, 
        ok: res.ok, 
        message: data?.message || (res.ok ? "✓ Message sent successfully! I'll get back to you soon." : "Failed to send message. Please try again or email me directly at sonukumarsuman82@gmail.com") 
      });
      if (res.ok) e.currentTarget.reset();
    } catch (err) {
      setStatus({ 
        loading: false, 
        ok: false, 
        message: err.name === 'AbortError' 
          ? "Request timeout. Please email me directly at sonukumarsuman82@gmail.com" 
          : "Network error. Please email me at sonukumarsuman82@gmail.com" 
      });
    }
  }
  return (
    <section
      id="contact"
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`text-sm uppercase tracking-[0.25em] font-semibold ${
              theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
            }`}
          >
            Get in Touch
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Let's Work Together
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 flex items-center justify-center gap-2"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className={`text-sm font-medium ${
                theme === 'dark' ? 'text-green-400' : 'text-green-600'
              }`}>
                Available for opportunities
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Open to <span className={`font-semibold ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}>full-time positions and internships</span> in Data Analytics, Business Intelligence, and Data Science roles. Let's connect and discuss how I can contribute to your team's success.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`rounded-2xl border p-5 sm:p-6 transition-all ${
                  theme === 'dark' 
                    ? 'border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:border-cyan-500/30' 
                    : 'border-slate-200 bg-white hover:border-cyan-500/30 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`rounded-xl p-3 ${
                    theme === 'dark' ? 'bg-cyan-500/10' : 'bg-cyan-50'
                  }`}>
                    <Mail className={`w-6 h-6 ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-sm font-semibold uppercase tracking-wider mb-2 ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Email
                    </h3>
                    <a
                      href="mailto:sonukumarsuman82@gmail.com"
                      className={`text-base sm:text-lg font-medium break-words transition-colors ${
                        theme === 'dark' 
                          ? 'text-white hover:text-cyan-400' 
                          : 'text-slate-900 hover:text-cyan-600'
                      }`}
                    >
                      sonukumarsuman82@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`rounded-2xl border p-5 sm:p-6 transition-all ${
                  theme === 'dark' 
                    ? 'border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:border-cyan-500/30' 
                    : 'border-slate-200 bg-white hover:border-cyan-500/30 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`rounded-xl p-3 ${
                    theme === 'dark' ? 'bg-cyan-500/10' : 'bg-cyan-50'
                  }`}>
                    <Phone className={`w-6 h-6 ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`text-sm font-semibold uppercase tracking-wider mb-2 ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Phone
                    </h3>
                    <a
                      href="tel:+918340546905"
                      className={`text-base sm:text-lg font-semibold transition-colors ${
                        theme === 'dark' 
                          ? 'text-cyan-400 hover:text-cyan-300' 
                          : 'text-cyan-600 hover:text-cyan-700'
                      }`}
                    >
                      +91 8340546905
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`rounded-2xl border p-5 sm:p-6 transition-all ${
                  theme === 'dark' 
                    ? 'border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:border-cyan-500/30' 
                    : 'border-slate-200 bg-white hover:border-cyan-500/30 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`rounded-xl p-3 ${
                    theme === 'dark' ? 'bg-cyan-500/10' : 'bg-cyan-50'
                  }`}>
                    <MapPin className={`w-6 h-6 ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`text-sm font-semibold uppercase tracking-wider mb-2 ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Location
                    </h3>
                    <p className={`text-base sm:text-lg font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      Punjab, India
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className={`rounded-2xl border p-5 sm:p-6 ${
                  theme === 'dark' 
                    ? 'border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent' 
                    : 'border-cyan-200 bg-gradient-to-br from-cyan-50 to-transparent'
                }`}
              >
                <div className="flex items-start gap-3">
                  <Clock className={`w-5 h-5 mt-0.5 ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                  }`} />
                  <div>
                    <p className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      I typically respond within <span className={`font-semibold ${
                        theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                      }`}>24 hours</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="pt-4"
            >
              <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Connect With Me
              </h3>
              <div className="flex items-center gap-3">
                {[
                  { 
                    icon: Linkedin, 
                    href: "https://www.linkedin.com/in/sonu-kumar-6aa2b028a/", 
                    label: "LinkedIn",
                    color: theme === 'dark' ? 'hover:bg-blue-500/10 hover:border-blue-500/30' : 'hover:bg-blue-50 hover:border-blue-300'
                  },
                  { 
                    icon: Github, 
                    href: "https://github.com/SonuKumar-suman09", 
                    label: "GitHub",
                    color: theme === 'dark' ? 'hover:bg-slate-500/10 hover:border-slate-500/30' : 'hover:bg-slate-100 hover:border-slate-300'
                  },
                  { 
                    icon: Twitter, 
                    href: "#", 
                    label: "Twitter",
                    color: theme === 'dark' ? 'hover:bg-cyan-500/10 hover:border-cyan-500/30' : 'hover:bg-cyan-50 hover:border-cyan-300'
                  },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`rounded-xl border p-3 transition-all ${
                      theme === 'dark' 
                        ? 'border-white/10 bg-white/5' 
                        : 'border-slate-200 bg-white shadow-sm'
                    } ${social.color}`}
                    title={social.label}
                  >
                    <social.icon className={`w-5 h-5 ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                    }`} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className={`rounded-2xl border p-6 sm:p-8 ${
              theme === 'dark' 
                ? 'border-white/10 bg-gradient-to-br from-slate-800/30 to-slate-900/30' 
                : 'border-slate-200 bg-white shadow-lg'
            }`}>
              <div className="mb-6">
                <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  Send Me a Message
                </h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={onSubmit} className="space-y-5">
                {/* Name Input */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className={`w-full rounded-xl px-4 py-3 border transition-all focus:outline-none focus:ring-2 ${
                      theme === 'dark' 
                        ? 'border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:ring-cyan-500/50 focus:border-cyan-500/50' 
                        : 'border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-cyan-500 focus:border-cyan-500'
                    }`}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className={`w-full rounded-xl px-4 py-3 border transition-all focus:outline-none focus:ring-2 ${
                      theme === 'dark' 
                        ? 'border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:ring-cyan-500/50 focus:border-cyan-500/50' 
                        : 'border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-cyan-500 focus:border-cyan-500'
                    }`}
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Job Opportunity / Project Inquiry"
                    className={`w-full rounded-xl px-4 py-3 border transition-all focus:outline-none focus:ring-2 ${
                      theme === 'dark' 
                        ? 'border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:ring-cyan-500/50 focus:border-cyan-500/50' 
                        : 'border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-cyan-500 focus:border-cyan-500'
                    }`}
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell me about your project or opportunity..."
                    className={`w-full rounded-xl px-4 py-3 border resize-none transition-all focus:outline-none focus:ring-2 ${
                      theme === 'dark' 
                        ? 'border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:ring-cyan-500/50 focus:border-cyan-500/50' 
                        : 'border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-cyan-500 focus:border-cyan-500'
                    }`}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status.loading}
                  whileHover={{ scale: status.loading ? 1 : 1.02 }}
                  whileTap={{ scale: status.loading ? 1 : 0.98 }}
                  className={`w-full rounded-xl px-6 py-4 font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                    status.loading 
                      ? 'bg-cyan-400 cursor-wait' 
                      : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 hover:shadow-lg hover:shadow-cyan-500/30'
                  } disabled:opacity-70`}
                >
                  {status.loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-sm font-medium flex items-start gap-3 ${
                      status.ok 
                        ? theme === 'dark'
                          ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                          : 'bg-green-50 text-green-700 border border-green-200'
                        : theme === 'dark'
                          ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                          : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                  >
                    {status.ok ? (
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    )}
                    <span>{status.message}</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
