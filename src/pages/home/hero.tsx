import { Button } from "@/components/ui/button";
import heroImg from "../../assets/images/hero.png";
import BoxReveal from "@/components/ui/box-reveal";
import { useTranslation } from "@/hooks/useTranslation";

export default function HeroSection() {
  const { language } = useTranslation();

  return (
    <section className="h-[500px] w-full overflow-hidden relative">
      <img
        src={heroImg}
        alt="hero"
        className="w-full h-full object-cover bg-fixed"
      />
      <div className="absolute w-full  h-full top-0 bottom-0 left-0 right-0 flex">
        <div className="container mx-auto flex-1 flex flex-col items-end justify-center">
          <div className="w-[400px] h-[300px] bg-red-50 p-5 flex flex-col justify-center gap-3 rounded-md shadow-sm">
            <BoxReveal boxColor="#f97316" duration={0.8}>
              <>
                <h6 className="text-sm font-semibold">
                  {language.home.hero.title}
                </h6>
                <h1 className="text-4xl text-primary font-bold leading-10">
                  {language.home.hero.subtitle}
                </h1>
              </>
            </BoxReveal>
            <BoxReveal boxColor="#f97316" duration={1}>
              <p className="text-xs text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                minus quidem maxime officiis repellendus dignissimos obcaecati
                assumenda consequatur.
              </p>
            </BoxReveal>
            <BoxReveal boxColor="#f97316" duration={1.3}>
              <Button className="px-5 py-2 ">
                {language.home.hero.button}
              </Button>
            </BoxReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
