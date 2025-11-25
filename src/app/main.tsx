import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/shared/styles/variables.css";
import "@/shared/styles/global.css";
import 'highlight.js/styles/a11y-dark.css';
import { RouterProvider } from "react-router-dom";
import appRouter from "./router/ui";
import { StoreProvider } from "./providers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <RouterProvider router={appRouter()} />
    </StoreProvider>
  </StrictMode>
);
