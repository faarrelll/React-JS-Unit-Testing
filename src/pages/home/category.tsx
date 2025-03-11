import BlurFade from "@/components/ui/blur-fade";
import diningImg from "../../assets/images/range1.png";
import livingImg from "../../assets/images/range2.jpg";
import badRoomImg from "../../assets/images/range3.jpg";
import { EachElement } from "../../components/EachElement";
import { useTranslation } from "@/hooks/useTranslation";

export default function CategorySection() {
  const { language } = useTranslation();
  const items = [
    {
      name: language.home.category.one,
      image: diningImg,
    },
    {
      name: language.home.category.two,
      image: livingImg,
    },
    {
      name: language.home.category.three,
      image: badRoomImg,
    },
  ];

  return (
    <section className="container mx-auto my-10">
      <div className="flex items-center flex-col gap-2">
        <h2 className="text-xl font-bold">{language.home.category.title}</h2>
        <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="mt-5 flex flex-wrap md:flex-nowrap gap-3">
        <EachElement
          data={items}
          render={(item, index) => (
            <BlurFade
              delay={0.1 + index * 0.05}
              inView
              direction="left"
              key={index}
              className="h-[35rem] w-full group overflow-hidden relative rounded-md"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover rounded-md"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <h3 className="text-center text-lg font-semibold mt-5">
                  {item.name}
                </h3>
              </div>
            </BlurFade>
          )}
        />
      </div>
    </section>
  );
}
