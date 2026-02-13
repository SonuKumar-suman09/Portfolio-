import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";
import { Star, FileText, Sparkles, Award, Calendar, Target, Zap, CheckCircle2, Trophy, Briefcase, Users } from "lucide-react";

const ACHIEVEMENTS = [
  {
    id: 1,
    title: "3 Star Achieved",
    organization: "HackerRank",
    date: "July 2025",
    description: "Earned 3-star rating in Python, Java, C++ in HackerRank",
    icon: Star,
    logo: "💻",
    color: "from-blue-500 to-cyan-500",
    stats: [
      { label: "Python", value: "3⭐" },
      { label: "Java", value: "3⭐" },
      { label: "C++", value: "3⭐" },
    ],
  },
  {
    id: 2,
    title: "Patents Filed",
    organization: "Patent Office",
    date: "October 2025",
    description: "Patent application filed for AI-based intelligent automation system",
    icon: FileText,
    logo: "🏛️",
    color: "from-purple-500 to-pink-500",
    stats: [
      { label: "Status", value: "Filed" },
      { label: "Type", value: "AI/ML" },
      { label: "Innovation", value: "Patent" },
    ],
  },
  {
    id: 3,
    title: "Hackathon Participant",
    organization: "WEB3 SABHA",
    date: "March 2024",
    description: "Participated in Web3 hackathon with BlockseBlock partnership",
    icon: Trophy,
    logo: "🚀",
    color: "from-amber-500 to-orange-500",
    stats: [
      { label: "Event", value: "WEB3" },
      { label: "Partner", value: "BlockseBlock" },
      { label: "Team", value: "Team 7" },
    ],
  },
];

const STATS_OVERVIEW = [
  { label: "Star Ratings", value: "3", icon: Star, color: "from-blue-500 to-cyan-500" },
  { label: "Patents Filed", value: "2", icon: FileText, color: "from-purple-500 to-pink-500" },
  { label: "Languages Mastered", value: "3", icon: Award, color: "from-amber-500 to-orange-500" },
];

export default function Achievements() {
  const { theme } = useTheme();

  return (
    <motion.section
      id="achievements"
      className={theme === 'dark' ? 'bg-white/5 py-10' : 'bg-slate-50 py-10'}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p 
              className={`text-sm uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-indigo-200' : 'text-indigo-600'}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Recognition
            </motion.p>
            <motion.h2 
              className={`text-3xl font-bold relative inline-block ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Achievements
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </motion.h2>
          </motion.div>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {ACHIEVEMENTS.map((achievement, idx) => {
            const Icon = achievement.icon;

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group relative flex h-full flex-col gap-4 rounded-2xl border backdrop-blur-xl p-6 transition-all overflow-hidden ${
                    theme === 'dark' 
                      ? 'border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/30' 
                      : 'border-slate-200 bg-white hover:border-indigo-400/50 hover:shadow-lg'
                  }`}
                >
                  {/* Content */}
                  <div className="relative z-10 flex flex-col gap-4 h-full">
                    {/* Logo and Title - One Line */}
                    <div className="flex items-center gap-3 justify-between">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          className="text-4xl flex-shrink-0"
                        >
                          {achievement.logo}
                        </motion.div>
                        <div className="min-w-0">
                          <h3 className={`text-lg font-bold ${
                            theme === 'dark' ? 'text-white' : 'text-slate-900'
                          }`}>
                            {achievement.title}
                          </h3>
                          <p className={`text-xs font-semibold ${
                            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                          }`}>
                            {achievement.organization}
                          </p>
                        </div>
                      </div>
                      <motion.div
                        className={`text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${
                          theme === 'dark'
                            ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300'
                            : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700'
                        }`}
                      >
                        Achievement
                      </motion.div>
                    </div>

                    {/* Date */}
                    <div className={`flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full w-fit ${
                      theme === 'dark'
                        ? 'bg-slate-700/50 text-slate-300'
                        : 'bg-slate-200/60 text-slate-700'
                    }`}>
                      <Calendar className="w-3 h-3" />
                      {achievement.date}
                    </div>

                    {/* Description */}
                    {achievement.description && (
                      <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                        {achievement.description}
                      </p>
                    )}

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-2 mt-auto pt-4">
                      {achievement.stats.map((stat, sidx) => (
                        <motion.div
                          key={sidx}
                          whileHover={{ scale: 1.08, y: -3 }}
                          className={`p-3 rounded-lg text-center backdrop-blur-sm border ${
                            theme === 'dark'
                              ? `bg-gradient-to-br ${achievement.color}/10 border-white/10 hover:border-white/30`
                              : `bg-gradient-to-br ${achievement.color}/5 border-black/10 hover:border-black/20`
                          }`}
                        >
                          <p className={`text-lg font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-1`}>
                            {stat.value}
                          </p>
                          <p className={`text-xs font-semibold ${
                            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                          }`}>
                            {stat.label}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
