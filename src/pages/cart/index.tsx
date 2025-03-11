import AlertDialogCustom from "@/components/AlertDialogCustom";
import { EachElement } from "@/components/EachElement";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { useTranslation } from "@/hooks/useTranslation";
import MainLayout from "@/layout/main/MainLayout";
import { Cart } from "@/lib/interfaces";
import { minusQuantity, plusQuantity } from "@/store/features/cartSlice";
import { CreditCard, MinusCircle, PlusCircle, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { language } = useTranslation();
  const { carts, handleRemoveItem, handleIsQuantityOne, dispatch } = useCart();

  const calculateTotal = () =>
    carts.reduce((total, item) => {
      const price = Number(String(item.price).replace(/\./g, ""));
      return total + price * item.quantity;
    }, 0);

  return (
    <MainLayout className="container mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {language.cart.yourCart}
      </h1>

      <div className="flex flex-col gap-3">
        {carts.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-gray-500 text-lg">{language.cart.empty}</p>
          </div>
        )}
        <EachElement
          data={carts}
          render={(item: Cart, index) => {
            const isQuantityOne = handleIsQuantityOne(item.id);
            return (
              <BlurFade
                key={item.id}
                delay={0.25 + index * 0.05}
                inView
                direction="up"
                className="flex items-center p-4 gap-4 border rounded-lg shadow"
              >
                <img
                  src={item.images?.[0].imageUrl}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <div className="text-sm text-gray-500">
                    {item.description}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-yellow-600">
                      {/* Rp {item.price.toLocaleString("id-ID")} */}
                      Rp {item.price}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={() => dispatch(minusQuantity(item.id))}
                      disabled={isQuantityOne}
                      variant="secondary"
                      size="sm"
                      className={`${
                        isQuantityOne ? "cursor-not-allowed" : "cursor-pointer"
                      }`}
                    >
                      <MinusCircle size={18} />
                    </Button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <Button
                      onClick={() => dispatch(plusQuantity(item.id))}
                      variant="secondary"
                      size="sm"
                    >
                      <PlusCircle size={18} />
                    </Button>
                  </div>
                  <AlertDialogCustom
                    title="Are you sure want to delete this item?"
                    description="This action cannot be undone and will remove the item from your cart."
                    button={
                      <Button
                        variant="outline"
                        size="icon"
                        className="text-red-500"
                      >
                        <Trash2 size={20} />
                      </Button>
                    }
                    onclick={() => handleRemoveItem(item.id)}
                  />
                </div>
              </BlurFade>
            );
          }}
        />
      </div>

      {/* Summary */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          {language.cart.orderSummary}
        </h2>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-500">{language.cart.subtotal}</span>
          <span className="text-gray-800 font-medium">
            Rp {calculateTotal().toLocaleString("id-ID")}
          </span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-500">{language.cart.shipping}</span>
          <span className="text-gray-800 font-medium">Rp 50,000</span>
        </div>
        <div className="flex justify-between items-center font-semibold text-lg">
          <span>{language.cart.total}</span>
          <span>Rp {(calculateTotal() + 50000).toLocaleString("id-ID")}</span>
        </div>
        <Link to="/congrats">
          <Button className="w-full mt-4">
            <CreditCard size={20} className="mr-2" />
            Checkout
          </Button>
        </Link>
      </div>
    </MainLayout>
  );
}
