import { Phone, Wrench, MapPin, MessageCircle, Send } from "lucide-react";
import { phone, phoneLink, navItems, whatsappLink, telegramLink, vkLink } from "../data/content";
import { VkIcon } from "./icons/VkIcon";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-ink text-white">
      <div className="container-max px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* Logo + description */}
          <div className="max-w-sm text-center md:text-left">
            <div className="flex items-center justify-center gap-2 text-lg font-bold md:justify-start">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
                <Wrench className="h-5 w-5" />
              </span>
              ProLubTeh
            </div>
            <p className="mt-4 text-base text-gray-400">
              Быстрый, качественный и недорогой ремонт бытовой и крупно бытовой
              техники по Спб и ЛО.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <h4 className="text-base font-semibold uppercase tracking-wider text-gray-400">
              Навигация
            </h4>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-base text-gray-300 transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Contacts */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <h4 className="text-base font-semibold uppercase tracking-wider text-gray-400">
              Контакты
            </h4>
            <a
              href={phoneLink}
              className="flex items-center gap-2 text-base text-gray-300 transition-colors hover:text-brand"
            >
              <Phone className="h-4 w-4 text-brand" />
              {phone}
            </a>
            <div className="flex items-center gap-2 text-base text-gray-300">
              <MapPin className="h-4 w-4 text-brand" />
              Санкт-Петербург, Старо-Петергофский пр., 18Е
            </div>
            <div className="mt-2 flex items-center gap-3">
              <a
                href={vkLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-brand hover:text-white"
                aria-label="ВКонтакте"
              >
                <VkIcon className="h-5 w-5" />
              </a>
              <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-brand hover:text-white"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-brand hover:text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ProLubTeh. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
