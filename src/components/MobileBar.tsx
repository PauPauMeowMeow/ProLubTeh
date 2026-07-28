import { Phone, MessageCircle } from "lucide-react";
import { phoneLink, whatsappLink } from "../data/content";

export default function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden">
      <a
        href={phoneLink}
        className="flex flex-1 items-center justify-center gap-2 bg-brand py-4 text-base font-semibold text-white"
      >
        <Phone className="h-5 w-5" />
        Позвонить
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-green-500 py-4 text-base font-semibold text-white"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
    </div>
  );
}
