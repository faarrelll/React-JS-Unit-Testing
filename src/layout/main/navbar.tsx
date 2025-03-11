import { useTranslation } from "@/hooks/useTranslation";
import { useGetMeQuery } from "@/store/api/auth";
import { Apple, Languages, LogOut } from "lucide-react";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RootState } from "@/store/store";

export default function Navbar() {
  const location = useLocation();
  const { handleLanguageChange } = useTranslation();
  const pathname = location.pathname.replace("/", "");
  const carts = useSelector((state: RootState) => state.cart.value);
  const { data, isLoading } = useGetMeQuery();
  const user = data?.data;

  const onSignOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/auth";
  };
  return (
    <nav className="w-full h-16 bg-white flex items-center border">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Apple className="size-7 text-primary" />
          <h1 className="text-xl font-bold text-primary">FURNUTA</h1>
        </div>
        <div className="flex gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/product">Product</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="flex items-center gap-5">
          {/* LANGUAGE */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <Languages className="size-6" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-3">
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleLanguageChange("en")}
                  className=" text-left"
                >
                  <DropdownMenuItem>English</DropdownMenuItem>
                </button>
                <button
                  onClick={() => handleLanguageChange("id")}
                  className=" text-left"
                >
                  <DropdownMenuItem>Indonesia</DropdownMenuItem>
                </button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* PROFILE */}
          {isLoading && (
            <div className="h-10 w-10 rounded-full bg-gray-300 animate-pulse"></div>
          )}
          {!user && (
            <Link to="/auth">
              <Button size="sm" className="bg-primary text-white">
                Sign In
              </Button>
            </Link>
          )}
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="h-10 w-10 rounded-full relative outline-none">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    {user?.image ? (
                      <img
                        src={user?.image}
                        alt="profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-primary text-white flex justify-center items-center text-xl font-semibold">
                        {user.firstName.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="h-5 w-5 rounded-full absolute -top-1 bg-gray-200 text-primary text-xs -right-2 flex justify-center items-center font-bold">
                    <div>{carts.length}</div>
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-3">
                <DropdownMenuLabel>{user?.firstName}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link to="/profile">
                  <button
                    className={`w-full cursor-pointer rounded ${
                      pathname === "profile" ? "bg-muted" : ""
                    }`}
                  >
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                  </button>
                </Link>
                <Link to="/cart">
                  <button
                    className={`w-full cursor-pointer rounded ${
                      pathname === "cart" ? "bg-muted" : ""
                    }`}
                  >
                    <DropdownMenuItem>Cart</DropdownMenuItem>
                  </button>
                </Link>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <Badge
                  onClick={onSignOut}
                  className="text-xs w-full py-1 cursor-pointer flex items-center gap-1"
                >
                  <LogOut className="size-4" />
                  Sign Out
                </Badge>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </nav>
  );
}
