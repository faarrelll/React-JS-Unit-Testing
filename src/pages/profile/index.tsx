import { useUserContext } from "@/hooks/useUserContext";
import MainLayout from "@/layout/main/MainLayout";
import ProfileHeroSection from "./profile.hero";
import { Card } from "@/components/ui/card";
import { CreditCard, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/ui/blur-fade";
import { useTranslation } from "@/hooks/useTranslation";

export default function ProfilePage() {
  const { user } = useUserContext();
  const { language } = useTranslation();
  return (
    <MainLayout>
      <ProfileHeroSection user={user} />
      <div className="container flex flex-col items-center">
        <div className="h-20 w-20 md:w-32 md:h-32 -mt-10 md:-mt-14  bg-primary rounded-full relative z-10 ring-2 ring-primary">
          <img
            src={user?.img}
            alt={user?.firstName}
            className="w-full h-full object-cover rounded-full shadow-lg "
          />
        </div>
        <Button className="mt-3">{language.profile.updateProfile}</Button>
        <Card className="p-5 mt-5 w-full border shadow-sm rounded-md space-y-4">
          <BlurFade delay={0.5} inView className="flex items-center">
            <ShoppingCart className="w-5 h-5 text-primary mr-2" />
            <h3 className="text-lg font-semibold">
              {language.profile.orderHistory}
            </h3>
          </BlurFade>
          <BlurFade delay={0.5} inView className="space-y-2">
            <li className="flex justify-between text-sm text-gray-700">
              <span>{language.profile.order} #1234</span>
              <span className="text-gray-500">25 Desember 2024</span>
            </li>
            <li className="flex justify-between text-sm text-gray-700">
              <span>{language.profile.order} #5678</span>
              <span className="text-gray-500">15 Desember 2024</span>
            </li>
            <li className="flex justify-between text-sm text-gray-700">
              <span>{language.profile.order} #91011</span>
              <span className="text-gray-500">5 Desember 2024</span>
            </li>
          </BlurFade>

          <BlurFade delay={0.7} inView className="flex items-center mt-6">
            <Heart className="w-5 h-5 text-primary mr-2" />
            <h3 className="text-lg font-semibold">
              {language.profile.wishlist}
            </h3>
          </BlurFade>
          <BlurFade delay={0.7} inView className="space-y-2">
            <li className="text-sm text-gray-700">
              {language.profile.product} 1 - Sepatu Sport
            </li>
            <li className="text-sm text-gray-700">
              {language.profile.product} 2 - Jaket Musim Dingin
            </li>
            <li className="text-sm text-gray-700">
              {language.profile.product} 3 - Jam Tangan
            </li>
          </BlurFade>

          <BlurFade delay={0.9} inView className="flex items-center mt-6">
            <CreditCard className="w-5 h-5 text-primary mr-2" />
            <h3 className="text-lg font-semibold">
              {language.profile.paymentMethod}
            </h3>
          </BlurFade>
          <BlurFade delay={0.9} inView className="space-y-2">
            <li className="text-sm text-gray-700">Visa **** 1234</li>
            <li className="text-sm text-gray-700">MasterCard **** 5678</li>
          </BlurFade>
        </Card>
      </div>
    </MainLayout>
  );
}
