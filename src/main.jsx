import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";
import "remixicon/fonts/remixicon.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
