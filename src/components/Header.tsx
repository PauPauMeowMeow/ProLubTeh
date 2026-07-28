import { useState, useEffect } from "react";
import { Phone, Menu, X, Wrench, Send, MessageCircle } from "lucide-react";
import { navItems, phone, phoneLink, whatsappLink, telegramLink, vkLink } from "../data/content";
import { VkIcon } from "./icons/VkIcon";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className={`flex items-center gap-2 text-lg font-bold transition-colors duration-300 ${
            scrolled || menuOpen ? "text-ink" : "text-white"
          }`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
            <Wrench className="h-5 w-5" />
          </span>
          <span className="hidden sm:inline">ProLubTeh</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-base font-medium transition-colors hover:text-brand ${
                scrolled ? "text-ink-light" : "text-white/80"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-2">
            <a
              href={vkLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                scrolled ? "bg-gray-100 text-ink-light hover:bg-brand hover:text-white" : "bg-white/15 text-white hover:bg-brand hover:text-white"
              }`}
              aria-label="ВКонтакте"
            >
              <VkIcon className="h-4 w-4" />
            </a>
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                scrolled ? "bg-gray-100 text-ink-light hover:bg-brand hover:text-white" : "bg-white/15 text-white hover:bg-brand hover:text-white"
              }`}
              aria-label="Telegram"
            >
              <Send className="h-4 w-4" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                scrolled ? "bg-gray-100 text-ink-light hover:bg-brand hover:text-white" : "bg-white/15 text-white hover:bg-brand hover:text-white"
              }`}
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
          <a
            href={phoneLink}
            className={`flex items-center gap-2 text-base font-semibold transition-colors hover:text-brand ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            <Phone className="h-4 w-4 text-brand" />
            {phone}
          </a>
          <a href={phoneLink} className="btn-primary text-base">
            Записаться
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden ${
            scrolled || menuOpen ? "text-ink" : "text-white"
          }`}
          aria-label="Меню"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col gap-1 px-4 pb-6 pt-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="rounded-lg px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-brand-light hover:text-brand"
              >
                {item.label}
              </a>
            ))}
            <a
              href={phoneLink}
              className="btn-primary mt-2 w-full"
            >
              <Phone className="h-4 w-4" />
              {phone}
            </a>
            <div className="mt-4 flex items-center justify-center gap-3">
              <a
                href={vkLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-ink-light transition-colors hover:bg-brand hover:text-white"
                aria-label="ВКонтакте"
              >
                <VkIcon className="h-5 w-5" />
              </a>
              <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-ink-light transition-colors hover:bg-brand hover:text-white"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-ink-light transition-colors hover:bg-brand hover:text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
