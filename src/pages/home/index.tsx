import MainLayout from "@/layout/main/MainLayout";
import ProductSection from "@/pages/home/products";
import HeroSection from "@/pages/home/hero";
import CategorySection from "@/pages/home/category";

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <CategorySection />
      <ProductSection />
    </MainLayout>
  );
}
