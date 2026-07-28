import { Wrench } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import worker1 from "../assets/workers/worker-1.webp";
import worker2 from "../assets/workers/worker-2.webp";
import worker3 from "../assets/workers/worker-3.webp";
import worker4 from "../assets/workers/worker-4.webp";

const workers = [
  {
    photo: worker1,
    name: "Леонов Даниил Антонович",
    specialty: "Профессионал в ремонте стиральных машин. Знаком со всеми возможными неисправностями стиральных машин, от базовых до сложных.",
  },
  {
    photo: worker2,
    name: "Ямбогло Андрей Николаевич",
    specialty: "Квалифицированный мастер в вопросе ремонта посудомоечных машин. Надежно чинит технику, так что вы забудете о неудобствах!",
  },
  {
    photo: worker3,
    name: "Гусаров Дмитрий Сергеевич",
    specialty: "Эксперт в ремонте кондиционеров. Разбирается во всех моделях и брендах техники, поэтому смело доверьте ему ваш кондиционер!",
  },
  {
    photo: worker4,
    name: "Ведяшкин Иван Александрович",
    specialty: "Специалист обладает глубокими знаниями и опытом в области ремонта холодильного оборудования.",
  },
];

export default function Workers() {
  return (
    <SectionWrapper id="workers" bg="surface">
      <div className="container-max section-padding">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
            Наши мастера
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ink-light">
            Выберите нас, и ваша техника обретет новую жизнь! Мы не просто ремонтируем – мы творим чудеса! Наши мастера – настоящие профессионалы, которые с душой и мастерством вернут вашей технике первозданный вид. Мы ценим ваше время и работаем быстро и надежно. Доверьтесь нам, и мы подарим вашей технике вторую молодость!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {workers.map((worker, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={worker.photo}
                  alt={worker.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-1.5">
                  <Wrench className="h-4 w-4 shrink-0 text-brand" />
                  <h3 className="text-base font-semibold text-ink">
                    {worker.name}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-ink-light">
                  {worker.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
