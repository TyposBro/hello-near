import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter } from "react-router-dom";
import { Company, Profile, Hello } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/p",
    element: <Profile />,
  },
  {
    path: "/c",
    element: <Company />,
  },
  {
    path: "/hello",
    element: <Hello />,
  },

  {
    path: "/",
    element: <Profile />,
  },
]);

export default router;
