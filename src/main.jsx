import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/index.jsx";
import 'remixicon/fonts/remixicon.css';

const rtr = createBrowserRouter([
  {
    element: <Index />,
    path: "/",
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rtr} />
  </StrictMode>,
);
