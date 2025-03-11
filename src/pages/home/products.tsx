import { useTranslation } from "@/hooks/useTranslation";
import ProductList from "../../components/product.list";
import { useProducts } from "@/hooks/useProducts";
import ProductSkeleton from "@/components/ProductSkeleton";

export default function ProductSection() {
  const { language } = useTranslation();
  const { products, isLoading } = useProducts();

  return (
    <section className="container mx-auto mt-16">
      <h2 className="text-xl font-bold text-center">
        {language.home.product.title}
      </h2>
      {isLoading ? (
        <ProductSkeleton limit={5} />
      ) : (
        <ProductList products={products?.data.slice(0, 5)} />
      )}
    </section>
  );
}
