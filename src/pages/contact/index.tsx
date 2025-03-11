import { Mail, MapPinned, Phone } from "lucide-react";
import MainLayout from "@/layout/main/MainLayout";
import ContactForm from "./contact.form";
import { contactImg } from "@/assets";
import { FadeText } from "@/components/ui/fade-text";
import BlurFade from "@/components/ui/blur-fade";
import { useTranslation } from "@/hooks/useTranslation";

export default function ContactPage() {
  const { language } = useTranslation();
  return (
    <MainLayout>
      <div className="relative">
        <div className="h-[400px]">
          <img
            src={contactImg}
            alt="contactImg"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full flex justify-center items-start">
          <div className="space-y-3 container text-center mt-8">
            <FadeText
              className="text-5xl font-bold p-3 text-white text-center"
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.3 } },
              }}
              text={`${language.contact.hero.title}`}
            />
            <FadeText
              className="text-sm text-gray-300 leading-7"
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.6 } },
              }}
              text={`${language.contact.hero.subtitle}`}
            />
          </div>
        </div>
      </div>
      <div className="container bg-white -mt-36 relative z-20 p-2 rounded-lg">
        <BlurFade delay={0.3} inView direction="up" className="flex gap-5">
          <div className="w-[19rem] bg-primary p-7 rounded-md text-white">
            <h3 className="text-xl font-semibold mb-5">
              {language.contact.contactInformation.title}
            </h3>
            <p className="text-xs leading-5">
              {language.contact.contactInformation.subtitle}
            </p>
            <div className="flex gap-2 items-center mt-8">
              <Phone className="size-5" />
              <div className="">
                <p className="text-xs">+04829347928</p>
                <p className="text-xs">+023974837723</p>
              </div>
            </div>
            <div className="flex gap-2 items-center mt-8">
              <Mail className="size-5" />
              <p className="text-xs">+juaini742@gmail.com</p>
            </div>
            <div className="flex gap-2 items-center mt-8 mb-16">
              <MapPinned className="size-5" />
              <div className="">
                <p className="text-xs">+Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </BlurFade>
      </div>
    </MainLayout>
  );
}
