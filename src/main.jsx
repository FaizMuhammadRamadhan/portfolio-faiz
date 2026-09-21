import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Index = lazy(() => import("./pages/index.jsx"));

const rtr = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<div className="min-h-screen bg-gray-100" />}>
        <Index />
      </Suspense>
    ),
    path: "/",
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rtr} />
  </StrictMode>
);