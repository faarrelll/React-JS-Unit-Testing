import MainLayout from "@/layout/main/MainLayout";
import ProductStoreSection from "./products.store";
import ProductHeroSection from "./product.hero";

export default function ProductPage() {
  return (
    <MainLayout>
      <ProductHeroSection />
      <ProductStoreSection />
    </MainLayout>
  );
}
