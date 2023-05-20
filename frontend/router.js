import { createBrowserRouter } from "react-router-dom";
import { Company, Profile, Hello } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/p",
    Component: Profile,
  },
  {
    path: "/c",
    Component: Company,
  },
  {
    path: "/hello",
    Component: Hello,
  },

  {
    path: "/",
    Component: Profile,
  },
]);

export default router;
