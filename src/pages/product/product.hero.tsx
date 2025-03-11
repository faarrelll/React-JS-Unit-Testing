import { productBgImg } from "@/assets";
import { FadeText } from "@/components/ui/fade-text";
import { useTranslation } from "@/hooks/useTranslation";

export default function ProductHeroSection() {
  const { language } = useTranslation();
  return (
    <section className="h-[300px] w-full relative overflow-hidden">
      <img
        src={productBgImg}
        alt="hero"
        className="w-full h-full object-cover bg-bottom"
      />

      <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-black/20 flex justify-center items-center">
        <div className="container flex flex-col items-center text-center">
          <FadeText
            className="text-5xl font-bold p-3 text-white text-center mb-3 block"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.3 } },
            }}
            text={`${language.products.hero.title}`}
          />
          <FadeText
            className="text-sm text-white leading-7"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.6 } },
            }}
            text={`${language.products.hero.subtitle}`}
          />
        </div>
      </div>
    </section>
  );
}
