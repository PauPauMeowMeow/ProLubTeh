import { motion } from "framer-motion";
import { Phone, ChevronDown, Send, MessageCircle } from "lucide-react";
import { heroContent, phoneLink, whatsappLink, telegramLink, vkLink } from "../data/content";
import { VkIcon } from "./icons/VkIcon";
import mainBg from "../assets/main.webp";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={mainBg}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/85" />
      </div>

      <div className="container-max relative z-10 px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.9)" }}
        >
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {heroContent.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-gray-100 sm:text-xl lg:text-2xl">
            {heroContent.subtitle}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={phoneLink} className="btn-primary w-full text-base sm:w-auto">
              <Phone className="h-5 w-5" />
              {heroContent.primaryCta}
            </a>
            <a
              href={heroContent.secondaryCtaHref}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(heroContent.secondaryCtaHref)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/80 bg-white/10 px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-white/20 active:scale-95 sm:w-auto"
            >
              {heroContent.secondaryCta}
              <ChevronDown className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href={vkLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-brand hover:text-white"
              aria-label="ВКонтакте"
            >
              <VkIcon className="h-5 w-5" />
            </a>
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-brand hover:text-white"
              aria-label="Telegram"
            >
              <Send className="h-5 w-5" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-brand hover:text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
