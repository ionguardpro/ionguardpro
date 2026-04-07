"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <>
      {/* FAB Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary-container text-on-primary rounded-[4px] flex items-center justify-center shadow-2xl hover:bg-primary-fixed-dim active:scale-95 transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle chat"
      >
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="material-symbols-outlined text-2xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {isOpen ? "close" : "chat"}
        </motion.span>
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-surface-container-lowest border border-outline-variant/20 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-surface-container-low px-5 py-4 flex items-center gap-3 border-b border-outline-variant/10">
              <div className="w-8 h-8 bg-primary-container flex items-center justify-center rounded-[4px]">
                <span
                  className="material-symbols-outlined text-on-primary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  smart_toy
                </span>
              </div>
              <div>
                <h4 className="font-headline text-sm font-bold text-on-surface">
                  IonGuard Assistant
                </h4>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wide text-neutral-500">
                    Online
                  </span>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 min-h-[300px] max-h-[400px] overflow-y-auto p-5 space-y-4">
              {/* Welcome Message */}
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-surface-container-high flex items-center justify-center rounded-[4px] flex-shrink-0 mt-0.5">
                  <span
                    className="material-symbols-outlined text-primary-container text-xs"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    smart_toy
                  </span>
                </div>
                <div className="bg-surface-container-low px-4 py-3 max-w-[85%]">
                  <p className="text-sm text-on-surface leading-relaxed">
                    Welcome to IonGuard Pro. I can help you with product
                    specifications, safety certifications, or connect you with
                    our engineering team.
                  </p>
                  <span className="block mt-2 font-mono text-[9px] text-neutral-600 uppercase">
                    Just now
                  </span>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-outline-variant/10 bg-surface-container-low p-3">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-surface-container-lowest border border-outline-variant/20 focus:border-primary-container focus:ring-0 focus:outline-none text-on-surface text-sm px-4 py-2.5 font-body placeholder:text-neutral-600 transition-colors"
                />
                <button
                  className="w-10 h-10 bg-primary-container text-on-primary flex items-center justify-center hover:bg-primary-fixed-dim active:scale-95 transition-all duration-150"
                  aria-label="Send message"
                >
                  <span className="material-symbols-outlined text-lg">
                    send
                  </span>
                </button>
              </div>
              <p className="mt-2 font-mono text-[8px] text-neutral-600 uppercase tracking-wider text-center">
                Powered by IonGuard Intelligence
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
