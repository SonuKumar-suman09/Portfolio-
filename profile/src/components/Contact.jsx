import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { Mail, Linkedin, Github, Copy, CheckCircle, Send, MessageSquare, MapPin, Clock, Phone } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState({ loading: false, ok: null, message: "" });
  const [charCount, setCharCount] = useState(0);
  const [copied, setCopied] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const { theme } = useTheme();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("Sonukumarsuman82@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMessageChange = (e) => {
    setCharCount(e.target.value.length);
  };

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      setStatus({ loading: true, ok: null, message: "" });
      const apiUrl = import.meta.env.VITE_API_URL || '/api';
      const res = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({ ok: res.ok }));
      setStatus({ loading: false, ok: res.ok, message: data?.message || (res.ok ? "Message sent successfully! I'll get back to you soon." : "Failed to send") });
      if (res.ok) {
        e.currentTarget.reset();
        setCharCount(0);
      }
    } catch (err) {
      setStatus({ loading: false, ok: false, message: "Network error" });
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Sonukumarsuman82@gmail.com",
      description: "Respond within 24 hours",
      color: "from-blue-500 to-cyan-500",
      bgColor: theme === 'dark' ? 'from-blue-900/20 to-cyan-900/20' : 'from-blue-50 to-cyan-50',
      borderColor: theme === 'dark' ? 'border-blue-500/30' : 'border-blue-200/50',
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-8340546905",
      description: "Call or WhatsApp anytime",
      color: "from-green-500 to-emerald-500",
      bgColor: theme === 'dark' ? 'from-green-900/20 to-emerald-900/20' : 'from-green-50 to-emerald-50',
      borderColor: theme === 'dark' ? 'border-green-500/30' : 'border-green-200/50',
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      description: "Open to remote opportunities",
      color: "from-purple-500 to-pink-500",
      bgColor: theme === 'dark' ? 'from-purple-900/20 to-pink-900/20' : 'from-purple-50 to-pink-50',
      borderColor: theme === 'dark' ? 'border-purple-500/30' : 'border-purple-200/50',
    },
    {
      icon: Clock,
      title: "Availability",
      value: "Immediate",
      description: "Ready to start new projects",
      color: "from-emerald-500 to-teal-500",
      bgColor: theme === 'dark' ? 'from-emerald-900/20 to-teal-900/20' : 'from-emerald-50 to-teal-50',
      borderColor: theme === 'dark' ? 'border-emerald-500/30' : 'border-emerald-200/50',
    },
  ];

  return (
    <section
      id="contact"
      className={`relative px-4 sm:px-6 py-10 sm:py-16 overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900'
          : 'bg-gradient-to-b from-white via-slate-50 to-white'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, 50, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-blue-600/20' : 'bg-blue-400/20'
          }`}
        />
        <motion.div
          animate={{ y: [0, -50, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-purple-600/20' : 'bg-purple-400/20'
          }`}
        />
      </div>

      <div className="relative mx-auto max-w-7xl z-10 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md mb-6"
            style={{
              borderColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.4)' : 'rgba(59, 130, 246, 0.3)',
              background: theme === 'dark' ? 'rgba(59, 130, 246, 0.08)' : 'rgba(59, 130, 246, 0.05)',
            }}
          >
            <MessageSquare className="w-4 h-4 text-blue-500" />
            <span className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
            }`}>Get in Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className={`text-5xl sm:text-6xl font-black mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Let's Create Something <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Amazing</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className={`text-lg sm:text-xl max-w-3xl mx-auto mb-4 ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Whether you have a project in mind, a question, or just want to connect, I'd love to hear from you.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`text-base sm:text-lg max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Open to full-time positions and internships in Data Analytics, Business Intelligence, and Data Science roles.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className={`text-base sm:text-lg max-w-2xl mx-auto mt-4 ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            If you're a recruiter or hiring manager looking for a detail-oriented analyst who can turn data into actionable insights, let's connect. I'm ready to contribute to your team's success.
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 auto-rows-fr"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative p-6 sm:p-8 rounded-2xl border backdrop-blur-md overflow-hidden h-full flex flex-col ${
                  theme === 'dark'
                    ? `${info.borderColor} bg-gradient-to-br ${info.bgColor}`
                    : `${info.borderColor} bg-gradient-to-br ${info.bgColor}`
                }`}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <motion.div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 bg-gradient-to-r ${info.color} p-1`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className={`w-full h-full rounded-lg flex items-center justify-center ${
                      theme === 'dark' ? 'bg-slate-900' : 'bg-white'
                    }`}>
                      <Icon className="w-6 h-6" style={{
                        background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                        backgroundImage: `linear-gradient(135deg, var(--color-start), var(--color-end))`,
                      }} />
                    </div>
                  </motion.div>

                  <h3 className={`text-xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {info.title}
                  </h3>

                  <p className={`font-semibold mb-2 bg-gradient-to-r ${info.color} bg-clip-text text-transparent`}>
                    {info.value}
                  </p>

                  <p className={`text-sm mb-6 flex-1 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {info.description}
                  </p>

                  {info.title === "Email" && (
                    <motion.button
                      onClick={handleCopyEmail}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`mt-4 w-full py-2 px-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                        copied
                          ? `bg-gradient-to-r ${info.color} text-white`
                          : theme === 'dark'
                          ? 'bg-slate-700/50 hover:bg-slate-600/50 text-slate-300'
                          : 'bg-slate-200/50 hover:bg-slate-300/50 text-slate-700'
                      }`}
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy Email
                        </>
                      )}
                    </motion.button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className={`relative p-6 sm:p-8 rounded-2xl border backdrop-blur-md overflow-hidden h-full ${
              theme === 'dark'
                ? 'border-slate-700/50 bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-slate-950/40'
                : 'border-slate-200/60 bg-gradient-to-br from-white/60 via-slate-50/40 to-white/40'
            }`}>
              {/* Form header */}
              <div className="mb-6">
                <h3 className={`text-2xl sm:text-3xl font-bold mb-1 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  Send me a message
                </h3>
                <p className={`text-xs sm:text-sm mb-3 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Please enter your details below and I'll get back to you soon.
                </p>
                <div className={`h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full`} />
              </div>

              <form onSubmit={onSubmit} className="space-y-3">
                {/* Name and Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 }}
                  >
                    <label className={`block text-sm font-semibold mb-2 ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Your Name
                    </label>
                    <input
                      name="name"
                      required
                      placeholder="Enter your name"
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none ${
                        focusedField === 'name'
                          ? theme === 'dark'
                            ? 'border-blue-500 shadow-lg shadow-blue-500/20 bg-slate-800'
                            : 'border-blue-500 shadow-lg shadow-blue-500/20 bg-white'
                          : theme === 'dark'
                          ? 'border-slate-600 bg-slate-800/50 hover:border-slate-500'
                          : 'border-slate-300 bg-white/50 hover:border-slate-400'
                      } ${
                        theme === 'dark'
                          ? 'text-white placeholder:text-slate-500'
                          : 'text-slate-900 placeholder:text-slate-400'
                      }`}
                    />
                  </motion.div>

                  {/* Email Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.37 }}
                  >
                    <label className={`block text-sm font-semibold mb-2 ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Your Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none ${
                        focusedField === 'email'
                          ? theme === 'dark'
                            ? 'border-blue-500 shadow-lg shadow-blue-500/20 bg-slate-800'
                            : 'border-blue-500 shadow-lg shadow-blue-500/20 bg-white'
                          : theme === 'dark'
                          ? 'border-slate-600 bg-slate-800/50 hover:border-slate-500'
                          : 'border-slate-300 bg-white/50 hover:border-slate-400'
                      } ${
                        theme === 'dark'
                          ? 'text-white placeholder:text-slate-500'
                          : 'text-slate-900 placeholder:text-slate-400'
                      }`}
                    />
                  </motion.div>
                </div>

                {/* Subject Input */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.39 }}
                >
                  <label className={`block text-sm font-semibold mb-2 ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Subject
                  </label>
                  <input
                    name="subject"
                    placeholder="Enter subject"
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-5 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none ${
                      focusedField === 'subject'
                        ? theme === 'dark'
                          ? 'border-blue-500 shadow-lg shadow-blue-500/20 bg-slate-800'
                          : 'border-blue-500 shadow-lg shadow-blue-500/20 bg-white'
                        : theme === 'dark'
                        ? 'border-slate-600 bg-slate-800/50 hover:border-slate-500'
                        : 'border-slate-300 bg-white/50 hover:border-slate-400'
                    } ${
                      theme === 'dark'
                        ? 'text-white placeholder:text-slate-500'
                        : 'text-slate-900 placeholder:text-slate-400'
                    }`}
                  />
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.41 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <label className={`block text-sm font-semibold ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Message
                    </label>
                    <span className={`text-xs font-semibold ${
                      charCount > 450 ? 'text-red-500' : charCount > 400 ? 'text-yellow-500' : theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      {charCount}/500
                    </span>
                  </div>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    maxLength={500}
                    placeholder="Enter your message"
                    onChange={handleMessageChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-5 py-3 rounded-lg border-2 resize-none transition-all duration-300 focus:outline-none ${
                      focusedField === 'message'
                        ? theme === 'dark'
                          ? 'border-blue-500 shadow-lg shadow-blue-500/20 bg-slate-800'
                          : 'border-blue-500 shadow-lg shadow-blue-500/20 bg-white'
                        : theme === 'dark'
                        ? 'border-slate-600 bg-slate-800/50 hover:border-slate-500'
                        : 'border-slate-300 bg-white/50 hover:border-slate-400'
                    } ${
                      theme === 'dark'
                        ? 'text-white placeholder:text-slate-500'
                        : 'text-slate-900 placeholder:text-slate-400'
                    }`}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status.loading}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.43 }}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 sm:py-4 px-6 rounded-lg font-bold uppercase tracking-wide text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 mt-1 ${
                    status.loading
                      ? 'bg-slate-500/50 cursor-wait'
                      : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50'
                  } text-white disabled:opacity-70`}
                >
                  {status.loading ? (
                    <>
                      <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}>
                        <Send className="w-5 h-5" />
                      </motion.span>
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
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`p-5 rounded-lg text-sm font-medium flex items-center gap-3 ${
                      status.ok
                        ? theme === 'dark'
                          ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-300'
                          : 'bg-emerald-100/80 border border-emerald-300 text-emerald-700'
                        : theme === 'dark'
                        ? 'bg-red-500/20 border border-red-500/50 text-red-300'
                        : 'bg-red-100/80 border border-red-300 text-red-700'
                    }`}
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{status.message}</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6 flex flex-col"
          >
            {/* Social Links Card */}
            <div className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-md ${
              theme === 'dark'
                ? 'border-slate-700/50 bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-slate-950/40'
                : 'border-slate-200/60 bg-gradient-to-br from-white/60 via-slate-50/40 to-white/40'
            }`}>
              <h4 className={`text-lg font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                Connect With Me
              </h4>

              <div className="space-y-4">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/sonukumarsuman09/", label: "LinkedIn", color: "from-blue-600 to-blue-400" },
                  { icon: Github, href: "https://github.com/SonuKumar-suman09", label: "GitHub", color: "from-slate-700 to-slate-500" },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.45 + index * 0.1 }}
                      whileHover={{ x: 8 }}
                      className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${
                        theme === 'dark'
                          ? 'border-slate-600 bg-slate-700/20 hover:bg-slate-700/40 hover:border-slate-500'
                          : 'border-slate-300 bg-slate-200/20 hover:bg-slate-200/40 hover:border-slate-400'
                      }`}
                    >
                      <motion.div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-r ${social.color} flex items-center justify-center`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <p className={`font-semibold text-sm ${
                          theme === 'dark' ? 'text-white' : 'text-slate-900'
                        }`}>
                          {social.label}
                        </p>
                        <p className={`text-xs ${
                          theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          Connect & Follow
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Tips Card */}
            <div className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-md ${
              theme === 'dark'
                ? 'border-emerald-500/30 bg-gradient-to-br from-emerald-900/20 to-teal-900/20'
                : 'border-emerald-300/40 bg-gradient-to-br from-emerald-50 to-teal-50'
            }`}>
              <h4 className={`text-sm font-bold mb-4 uppercase tracking-wide ${
                theme === 'dark' ? 'text-emerald-300' : 'text-emerald-700'
              }`}>
                💡 Quick Tips
              </h4>
              <ul className={`space-y-2 text-xs ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
              }`}>
                <li>• Be specific in your subject</li>
                <li>• Share relevant details</li>
                <li>• Include your availability</li>
                <li>• Check spam folder for reply</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
