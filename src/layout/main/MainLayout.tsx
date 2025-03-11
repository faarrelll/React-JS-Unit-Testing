import Footer from "@/layout/main/footer";

import { cn } from "@/lib/utils";
import Navbar from "./navbar";

export default function MainLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={cn("flex-1", className)}>{children}</main>
      <Footer />
    </div>
  );
}
