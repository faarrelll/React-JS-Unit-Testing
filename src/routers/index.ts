import ProtectedRouter from "@/routers/ProtectedRouter";
import AuthPage from "@/pages/auth";
import CartPage from "@/pages/cart";
import CongratulationsPage from "@/pages/congrats";
import ContactPage from "@/pages/contact";
import HomePage from "@/pages/home";
import NotFoundPage from "@/pages/not-found";
import ProductPage from "@/pages/product";
import ProfilePage from "@/pages/profile";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ProductDetailPage from "@/pages/product-detail";

export const routers = createBrowserRouter([
  {
    path: "/auth",
    Component: AuthPage,
  },
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/product",
    Component: ProductPage,
  },
  {
    path: "/product/:id",
    Component: ProductDetailPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
  {
    path: "/cart",
    element: React.createElement(ProtectedRouter, {
      elements: React.createElement(CartPage),
    }),
  },
  {
    path: "/profile",
    element: React.createElement(ProtectedRouter, {
      elements: React.createElement(ProfilePage),
    }),
  },
  {
    path: "/congrats",
    Component: CongratulationsPage,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
