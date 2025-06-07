import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import routes from "./routes/index.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./assets/all.scss";

const router = createHashRouter(routes);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
