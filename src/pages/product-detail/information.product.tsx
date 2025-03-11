import { EachElement } from "@/components/EachElement";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { useTranslation } from "@/hooks/useTranslation";
import { Product, ProductImage, User } from "@/lib/interfaces";
import { CreditCard, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
interface Props {
  product: Product | undefined;
  setSelectedImg: (img: string) => void;
  selectedImg: string;
  user: User | null;
}

export default function InformationProduct({
  product,
  setSelectedImg,
  selectedImg,
  user,
}: Props) {
  const { language } = useTranslation();
  const { handleAddToCart, handleIsAlreadyInCart } = useCart();
  const isAlreadyInCart = handleIsAlreadyInCart(product?.id);
  const handleSelectImage = (img: string) => () => {
    setSelectedImg(img);
  };
  return (
    <section className="flex flex-col lg:flex-row items-stretch gap-5">
      <div className="flex-1 flex flex-col-reverse lg:flex-row gap-5">
        <div className="flex justify-center lg:justify-start lg:flex-col gap-2 lg:gap-5 lg:w-1/5">
          <EachElement
            data={product?.images || []}
            render={(item: ProductImage, index) => (
              <button
                key={index}
                onClick={handleSelectImage(item.imageUrl)}
                className="flex-shrink-0"
              >
                <img
                  className={`w-20 h-20 lg:w-[100px] lg:h-[100px] object-cover rounded-md bg-primary ${
                    item.imageUrl === selectedImg && "p-[2px]"
                  }`}
                  src={item.imageUrl}
                  alt="Product"
                />
              </button>
            )}
          />
        </div>

        <div className="flex-1 flex justify-center items-end">
          <img
            src={selectedImg}
            alt={product?.name}
            className="w-full max-w-[450px] h-auto object-cover rounded-md"
          />
        </div>
      </div>

      <div className="w-full lg:w-96 space-y-4 flex flex-col justify-end">
        <h6 className="font-semibold text-lg lg:text-2xl">{product?.name}</h6>

        <p className="text-muted-foreground text-base lg:text-lg">
          Rp. {product?.price}
        </p>

        <div className="flex items-center gap-2">
          <EachElement
            data={Array.from({ length: product?.stars || 1 })}
            render={() => <Star className="w-5 h-5 text-yellow-500" />}
          />
          <span className="text-sm lg:text-base">
            | {product?.reviewers} reviewers
          </span>
        </div>

        <p className="text-sm lg:text-base">{product?.shortDesc}</p>

        {!user && (
          <Link to="/auth">
            <Button className="w-full lg:w-auto">Sign in</Button>
          </Link>
        )}
        {user && (
          <div className="flex flex-col lg:flex-row gap-3">
            <Button className="w-full lg:w-auto">
              <CreditCard size={20} />
              {language.productDetail.buy}
            </Button>
            <Button
              variant="outline"
              onClick={() => handleAddToCart(product)}
              className={`${
                isAlreadyInCart && "bg-gray-500 cursor-not-allowed"
              } w-full lg:w-auto`}
              disabled={isAlreadyInCart}
            >
              <ShoppingCart size={20} />
              {isAlreadyInCart
                ? language.productDetail.alreadyInTheCart
                : language.productDetail.addToCart}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
