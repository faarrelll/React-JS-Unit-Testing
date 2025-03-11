import MainLayout from "@/layout/main/MainLayout";
import { axiosInstance } from "@/lib/axios.instance";
import { Product } from "@/lib/interfaces";
import { useGetMeQuery } from "@/store/api/auth";
import { Loader2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DescriptionProduct from "./description.product";
import InformationProduct from "./information.product";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImg, setSelectedImg] = useState<string>("");

  const { data } = useGetMeQuery();
  const user = data?.data || null;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/products/${id}`);
        setProduct(response.data.data);
        setSelectedImg(response.data.data.images?.[0].imageUrl || "");
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center gap-2">
        <Loader2 className="animate-spin text-primary" size={60} />
        <span className="text-xl">Loading... </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center gap-2">
        <X className="text-primary" size={60} />
        <span className="text-xl">Something going wrong... </span>
      </div>
    );
  }

  return (
    <MainLayout>
      <div className="container mt-10">
        <InformationProduct
          product={product}
          setSelectedImg={setSelectedImg}
          selectedImg={selectedImg}
          user={user}
        />
        <DescriptionProduct product={product} />
      </div>
    </MainLayout>
  );
}
