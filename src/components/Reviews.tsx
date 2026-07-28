import { Quote, Star } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import { reviews } from "../data/content";

export default function Reviews() {
  return (
    <SectionWrapper id="reviews" bg="white">
      <div className="container-max section-padding">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
            Отзывы наших клиентов
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-brand text-brand" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-2xl border border-gray-100 bg-surface p-6 shadow-sm"
            >
              <Quote className="mb-4 h-8 w-8 shrink-0 text-brand/30" />
              <p className="mb-6 flex-1 text-base leading-relaxed text-ink-light">
                {review.text}
              </p>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-lg font-semibold text-white">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-base font-semibold text-ink">
                    {review.name}
                  </p>
                  <p className="text-sm text-ink-light">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
