import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/router.jsx";
import AuthProvider from "./contexts/authContext/AuthProvider.jsx";
import { createHead, UnheadProvider } from "@unhead/react/client";

const head = createHead();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UnheadProvider head={head}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </UnheadProvider>
  </StrictMode>
);
