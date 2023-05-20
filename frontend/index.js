// React
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

// Setup on page load
window.onload = async () => {
  root.render(
    <RouterProvider router={router} />
    // <App isSignedIn={isSignedIn} contractId={CONTRACT_ADDRESS} wallet={wallet} />
  );
};
