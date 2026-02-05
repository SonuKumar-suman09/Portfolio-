import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";
import { Download, Eye, ArrowLeft, FileText } from "lucide-react";

const RESUME_DATA = {
  title: "Professional Resume",
  description: "Comprehensive resume showcasing professional experience, skills, and educational background.",
  resumeUrl: "/resume.pdf",
  downloadUrl: "/resume.pdf",
};

export default function ResumePage() {
  const { theme } = useTheme();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = RESUME_DATA.downloadUrl;
    link.download = "Sonu-Kumar-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-br from-white via-slate-50 to-white"
      } py-12 px-4`}
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <motion.a
          href="/"
          whileHover={{ x: -4 }}
          className={`inline-flex items-center gap-2 text-sm font-semibold mb-6 ${
            theme === "dark"
              ? "text-indigo-400 hover:text-indigo-300"
              : "text-indigo-600 hover:text-indigo-500"
          }`}
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className={`text-4xl font-bold mb-3 flex items-center gap-3 ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            <FileText size={40} className="text-purple-500" />
            {RESUME_DATA.title}
          </h1>
          <p
            className={`text-lg ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}
          >
            {RESUME_DATA.description}
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <motion.div
            className={`group relative rounded-2xl overflow-hidden shadow-2xl border ${
              theme === "dark"
                ? "border-white/10 bg-slate-900/50"
                : "border-slate-200 bg-white"
            }`}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <iframe
              src={RESUME_DATA.resumeUrl}
              title="Resume Preview"
              className="w-full h-[720px]"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* Actions & Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          {/* View Resume Button */}
          <motion.a
            href={RESUME_DATA.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative rounded-xl p-6 overflow-hidden transition text-center ${
              theme === "dark"
                ? "bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 hover:border-indigo-400/60 hover:shadow-lg hover:shadow-indigo-500/20"
                : "bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 hover:border-indigo-400 hover:shadow-lg"
            }`}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />

            <div className="relative z-10">
              <div
                className={`text-3xl mb-3 flex justify-center ${
                  theme === "dark" ? "text-indigo-300" : "text-indigo-600"
                }`}
              >
                <Eye size={32} />
              </div>
              <h4
                className={`text-lg font-bold ${
                  theme === "dark" ? "text-white" : "text-slate-900"
                }`}
              >
                View Online
              </h4>
              <p
                className={`text-sm mt-2 ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Opens in PDF viewer
              </p>
            </div>
          </motion.a>

          {/* Download Button */}
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative rounded-xl p-6 overflow-hidden transition text-center ${
              theme === "dark"
                ? "bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20"
                : "bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 hover:border-cyan-400 hover:shadow-lg"
            }`}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />

            <div className="relative z-10">
              <div
                className={`text-3xl mb-3 flex justify-center ${
                  theme === "dark" ? "text-cyan-300" : "text-cyan-600"
                }`}
              >
                <Download size={32} />
              </div>
              <h4
                className={`text-lg font-bold ${
                  theme === "dark" ? "text-white" : "text-slate-900"
                }`}
              >
                Download
              </h4>
              <p
                className={`text-sm mt-2 ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Save to your device
              </p>
            </div>
          </motion.button>

          {/* Resume Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`rounded-xl p-5 border ${
              theme === "dark"
                ? "bg-slate-900/50 border-white/10 text-slate-300"
                : "bg-slate-50 border-slate-200 text-slate-700"
            }`}
          >
            <p className="text-sm leading-relaxed">
              <span className="font-semibold block mb-2">📄 PDF Format</span>
              Best viewed with PDF reader or modern browser. Compatible with all devices.
            </p>
          </motion.div>

          {/* Contact Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`rounded-xl p-5 border ${
              theme === "dark"
                ? "bg-slate-900/50 border-white/10 text-slate-300"
                : "bg-slate-50 border-slate-200 text-slate-700"
            }`}
          >
            <p className="text-sm font-semibold mb-2">📧 Get in Touch</p>
            <a
              href="mailto:Sonukumarsuman82@gmail.com"
              className="text-sm text-indigo-500 hover:text-indigo-600 break-all"
            >
              Sonukumarsuman82@gmail.com
            </a>
          </motion.div>

          {/* Back Button */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`text-center rounded-lg px-6 py-3 font-semibold transition ${
              theme === "dark"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-400 hover:to-pink-400"
                : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500"
            }`}
          >
            ← Back to Portfolio
          </motion.a>
        </motion.div>
      </div>

      {/* Additional Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-4xl mx-auto mt-16"
      >
        <div
          className={`rounded-2xl border p-8 ${
            theme === "dark"
              ? "bg-slate-900/30 border-white/10"
              : "bg-slate-50 border-slate-200"
          }`}
        >
          <h2
            className={`text-2xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            Professional Summary
          </h2>
          <p
            className={`leading-relaxed ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Full-stack developer and data scientist with expertise in modern web technologies,
            machine learning, and cloud solutions. Passionate about building scalable applications
            and solving complex problems through code. Currently open to exciting opportunities
            and collaborations.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
