import { Users, Zap, ShieldCheck, type LucideIcon } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import { advantages } from "../data/content";
import type { Advantage } from "../data/content";

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  zap: Zap,
  "shield-check": ShieldCheck,
};

export default function Advantages() {
  return (
    <SectionWrapper id="about" bg="surface">
      <div className="container-max section-padding">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
            Почему выбирают нас
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {advantages.map((adv: Advantage, idx) => {
            const Icon = iconMap[adv.icon] ?? Users;
            return (
              <div
                key={idx}
                className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/30">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-4 min-h-[3.5rem] text-lg font-semibold text-ink">
                  {adv.title}
                </h3>
                <p className="text-base leading-relaxed text-ink-light">
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
