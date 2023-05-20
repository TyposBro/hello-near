// React
import { createRoot } from "react-dom/client";
import React from "react";

// Router
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

// Setup on page load
window.onload = async () => {
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
