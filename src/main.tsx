import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import { Toaster } from "./components/ui/toaster.tsx";
import { UserContextProvider } from "./hooks/useUserContext.tsx";
import { TranslationContextProvider } from "./hooks/useTranslation.tsx";
import { ProductContextProvider } from "./hooks/useProducts.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <UserContextProvider>
        <ProductContextProvider>
          <TranslationContextProvider>
            <App />
            <Toaster />
          </TranslationContextProvider>
        </ProductContextProvider>
      </UserContextProvider>
    </Provider>
  </StrictMode>
);
