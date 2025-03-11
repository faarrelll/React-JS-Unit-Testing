import { useGetMeQuery } from "@/store/api/auth";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRouter({
  elements,
}: {
  elements: React.ReactNode;
}) {
  const navigate = useNavigate();
  const { data, isLoading } = useGetMeQuery();
  const user = data?.data;

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/auth");
    }
  }, [isLoading, navigate, user]);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center gap-2">
        <Loader2 className="animate-spin text-primary" size={60} />
        <span className="text-xl">Loading... </span>
      </div>
    );
  }

  return elements;
}
