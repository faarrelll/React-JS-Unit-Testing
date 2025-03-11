import { Button } from "@/components/ui/button";
import MainLayout from "@/layout/main/MainLayout";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <MainLayout>
      <div className="text-center text-2xl h-full mt-10 flex flex-col gap-2">
        Not Found
        <Link to="/">
          <Button className="">Back to Home</Button>
        </Link>
      </div>
    </MainLayout>
  );
}
