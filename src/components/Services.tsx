import {
  Refrigerator,
  WashingMachine,
  Microwave,
  Utensils,
  AirVent,
  Droplets,
  type LucideIcon,
} from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import { services, phoneLink } from "../data/content";
import type { Service } from "../data/content";

const iconMap: Record<string, LucideIcon> = {
  refrigerator: Refrigerator,
  "washing-machine": WashingMachine,
  oven: Microwave,
  dishwasher: Utensils,
  "air-conditioner": AirVent,
  "water-boiler": Droplets,
};

export default function Services() {
  return (
    <SectionWrapper id="services" bg="white">
      <div className="container-max section-padding">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
            Наши услуги
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ink-light">
            Профессиональный ремонт всех видов бытовой техники с гарантией
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service: Service, idx) => {
            const Icon = iconMap[service.icon] ?? WashingMachine;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:shadow-xl hover:shadow-brand/5"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-light text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-ink-light">
                  {service.description}
                </p>
                <div className="mt-6">
                  <a
                    href={phoneLink}
                    className="inline-flex items-center gap-1.5 text-base font-semibold text-brand transition-colors hover:text-brand-dark"
                  >
                    Записаться
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
