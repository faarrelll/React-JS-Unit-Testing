import { Product } from "@/lib/interfaces";

interface Props {
  product: Product | undefined;
}

export default function DescriptionProduct({ product }: Props) {
  return (
    <section className="mt-10">
      <h3 className="text-2xl font-semibold text-center">Description</h3>
      {product && (
        <div className="mt-5 text-muted-foreground">
          <div dangerouslySetInnerHTML={{ __html: product.longDescription }} />
        </div>
      )}
    </section>
  );
}
