import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "./use-toast";
import { addToCart, removeFromCart } from "@/store/features/cartSlice";
import { Product } from "@/lib/interfaces";
import { useTranslation } from "./useTranslation";

export const useCart = () => {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const { language } = useTranslation();
  const carts = useSelector((state: RootState) => state.cart.value);

  const handleAddToCart = (product: Product | undefined) => {
    if (product) {
      dispatch(addToCart(product));
      toast({
        title: language.cart.toast.success,
        description: language.cart.toast.SuccessDescription,
      });
    } else {
      toast({
        variant: "destructive",
        title: language.cart.toast.error,
        description: language.cart.toast.ErrorDescription,
      });
    }
  };

  const handleIsAlreadyInCart = (itemId: number | undefined): boolean => {
    if (itemId === undefined) return false;

    const isInCart = carts.some((item) => item.id === itemId);
    return isInCart;
  };

  const handleIsQuantityOne = (itemId: number | undefined): boolean => {
    if (itemId === undefined) return false;
    const isQuantityOne = carts.some(
      (item) => item.id === itemId && item.quantity === 1
    );
    return isQuantityOne;
  };

  const handleRemoveItem = (itemId: number) => {
    const data = dispatch(removeFromCart(itemId));

    if (data.payload) {
      toast({
        title: "Success",
        description: "Item removed from cart",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Item failed to remove from cart",
      });
    }
  };

  return {
    carts,
    dispatch,
    handleAddToCart,
    handleRemoveItem,
    handleIsQuantityOne,
    handleIsAlreadyInCart,
  };
};
