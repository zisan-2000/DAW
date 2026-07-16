"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { AGENCY_CONFIG } from "@/lib/content";
import { easeOutExpo } from "@/lib/motion";

const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none";

export function MessageButton() {
  const t = useTranslations("messageWidget");
  const [isOpen, setIsOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Message from ${form.name || "website visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`,
    );
    const email = AGENCY_CONFIG.email.replace(/[[\]]/g, "");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIsOpen((current) => !current);
          setSent(false);
        }}
        className="fixed right-8 bottom-24 z-50 flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-all duration-300 hover:scale-110"
        aria-label={isOpen ? t("close") : t("open")}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: easeOutExpo }}
            className="fixed right-8 bottom-40 z-50 w-[min(22rem,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/10 dark:shadow-black/40"
            role="dialog"
            aria-label={t("title")}
          >
            <div className="bg-surface-ink px-5 py-4">
              <p className="font-display text-sm font-semibold text-surface-ink-foreground">
                {t("title")}
              </p>
              <p className="mt-1 text-xs text-surface-ink-foreground/70">
                {t("subtitle")}
              </p>
            </div>

            <div className="p-5">
              {sent ? (
                <p className="py-6 text-center text-sm text-muted-foreground">
                  {t("sentConfirmation")}
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder={t("namePlaceholder")}
                    className={inputClass}
                  />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder={t("emailPlaceholder")}
                    className={inputClass}
                  />
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder={t("messagePlaceholder")}
                    className={`${inputClass} resize-none`}
                  />
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                  >
                    {t("send")}
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
