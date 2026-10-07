import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import DodgeField from './reactbits/DodgeField';
import { Heart, ThumbsUp, Sparkles, MessageSquare, Send, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FeedbackSection: React.FC = () => {
  const [hasLiked, setHasLiked] = useState(false);
  const [relented, setRelented] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleYesClick = () => {
    setHasLiked(true);
    // Fire confetti cannons
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#6366f1', '#10b981', '#f43f5e', '#eab308', '#a855f7']
    });

    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#6366f1', '#10b981', '#38bdf8']
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ec4899', '#f59e0b', '#8b5cf6']
      });
    }, 250);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kushagrrana7345@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="feedback" className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <div className="relative z-10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md overflow-hidden">
        {/* Glow ambient background inside card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-xs font-semibold uppercase tracking-wider text-indigo-300 mb-6">
          <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
          <span>Recruiter & Visitor Feedback</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Did you like my portfolio?
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          I built this portfolio from scratch combining React 19, TypeScript, GSAP, WebGL, and modern frontend craftsmanship. Your feedback means everything!
        </p>

        {/* Reaction Buttons */}
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-5 z-10">
            {/* Yes Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleYesClick}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold transition-all shadow-lg ${
                hasLiked
                  ? 'bg-emerald-500 text-white shadow-emerald-500/30'
                  : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-emerald-500/20'
              }`}
            >
              <ThumbsUp className="w-5 h-5 fill-current" />
              <span>{hasLiked ? 'Loved It! 🎉' : 'Yes, absolutely!'}</span>
              <Sparkles className="w-4 h-4 text-emerald-200" />
            </motion.button>
          </div>

          {/* Interactive DodgeField for "No" Button */}
          <div className="w-full max-w-md mx-auto pt-2">
            <div className="text-xs text-slate-500 uppercase tracking-widest font-mono mb-1">
              (Try catching "No" below 😉)
            </div>
            <DodgeField
              fieldHeight={120}
              radius={110}
              reach={90}
              falloff={2.2}
              patience={5}
              inkColor="#ef4444"
              contrastColor="#ffffff"
              taunts={['No', 'Nope!', 'Too slow!', 'Almost!', 'Try again!', 'Okay, okay! 😄']}
              onRelent={() => setRelented(true)}
              onCatch={() => {
                alert('You caught it! But you really loved the vibes, admit it! 😉');
              }}
            />
          </div>
        </div>

        {/* Celebratory Note on Like */}
        <AnimatePresence>
          {hasLiked && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-8 p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 text-sm sm:text-base max-w-lg mx-auto"
            >
              <div className="flex items-center justify-center gap-2 font-bold text-white mb-2 text-lg">
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                <span>Thank you so much!</span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                As a 16-year-old developer in India, creating meaningful digital experiences is my obsession. Let’s collaborate or discuss opportunities!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-semibold border border-white/15 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Send className="w-3.5 h-3.5 text-slate-300" />}
                  <span>{copiedEmail ? 'Email Copied!' : 'Copy Kushagr’s Email'}</span>
                </button>
                <a
                  href="https://github.com/rana-kushagr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-semibold border border-white/15 transition-colors"
                >
                  GitHub Profile →
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {relented && !hasLiked && (
          <div className="mt-4 text-xs text-slate-400 font-mono">
            You chased it down! If you have constructive feedback or feature ideas, connect on GitHub or email!
          </div>
        )}
      </div>
    </section>
  );
};

export default FeedbackSection;
