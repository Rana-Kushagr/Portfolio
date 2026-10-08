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
    // Fire confetti cannons in regal gold & emerald
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#d4af37', '#e5c361', '#10b981', '#fbf8f1', '#114432']
    });

    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#d4af37', '#e5c361', '#10b981']
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#fbf8f1', '#d4af37', '#114432']
      });
    }, 250);
  };

  const handleCopyEmail = () => {
    void navigator.clipboard.writeText('kushagrrana7345@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="feedback" className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 bg-gradient-to-b from-[#061d14] to-[#04140e] border border-[#d4af37]/25 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md overflow-hidden"
      >
        {/* Glow ambient background inside card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#082419] text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-6 font-mono">
          <MessageSquare className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Visitor & Recruiter Feedback</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#fbf8f1] tracking-tight mb-4">
          Did you appreciate my portfolio?
        </h2>
        <p className="text-[#a3b8aa] text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          I built this portfolio from scratch combining React 19, TypeScript, GSAP, and first-principles software craftsmanship. Your honest feedback means everything!
        </p>

        {/* Reaction Buttons */}
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-wrap items-center justify-center gap-4 z-10">
            {/* Yes Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleYesClick}
              className={`cursor-target inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all shadow-md ${
                hasLiked
                  ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                  : 'bg-gradient-to-r from-[#d4af37] via-[#e5c361] to-[#c29c2d] hover:brightness-105 text-[#04140e] shadow-[#d4af37]/20'
              }`}
            >
              <ThumbsUp className="w-4 h-4 fill-current" />
              <span>{hasLiked ? 'Loved It! 🎉' : 'Yes, exceptional work!'}</span>
              <Sparkles className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* Interactive DodgeField for "No" Button */}
          <div className="w-full max-w-sm mx-auto pt-1">
            <div className="text-[11px] text-[#789382] uppercase tracking-widest font-mono mb-1">
              (Try catching "No" below 😉)
            </div>
            <DodgeField
              fieldHeight={100}
              radius={160}
              reach={135}
              falloff={1.5}
              fleeDuration={90}
              patience={8}
              inkColor="#d4af37"
              contrastColor="#04140e"
              taunts={['No', 'Nope!', 'Too slow!', 'Almost!', 'Keep trying!', 'Nope x2', 'Whoops!', 'Okay, okay! 😄']}
              onRelent={() => setRelented(true)}
              onCatch={() => {
                alert('You caught it! But you recognize the craftsmanship, admit it! 😉');
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
              className="mt-8 p-6 rounded-2xl bg-[#082419] border border-[#d4af37]/30 text-[#fbf8f1] text-sm sm:text-base max-w-lg mx-auto"
            >
              <div className="flex items-center justify-center gap-2 font-bold text-[#d4af37] mb-2 text-lg">
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                <span>Thank you so much!</span>
              </div>
              <p className="text-[#a3b8aa] text-xs sm:text-sm leading-relaxed mb-4">
                As a 16-year-old student builder in India, creating meaningful digital experiences with high craft is my obsession. Let’s collaborate or discuss opportunities!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="cursor-target inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0a2e20] hover:bg-[#0d3b29] text-[#fbf8f1] font-mono text-xs font-semibold border border-[#d4af37]/25 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Send className="w-3.5 h-3.5 text-[#d4af37]" />}
                  <span>{copiedEmail ? 'Email Copied!' : 'Copy Kushagr’s Email'}</span>
                </button>
                <a
                  href="https://github.com/rana-kushagr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-target px-4 py-2 rounded-xl bg-[#0a2e20] hover:bg-[#0d3b29] text-[#fbf8f1] font-mono text-xs font-semibold border border-[#d4af37]/25 transition-colors"
                >
                  GitHub Profile →
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {relented && !hasLiked && (
          <div className="mt-4 text-xs text-[#789382] font-mono">
            You chased it down! If you have constructive feedback or feature ideas, connect on GitHub or email!
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default FeedbackSection;
