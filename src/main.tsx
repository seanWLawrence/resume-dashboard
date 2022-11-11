import React from "react";
import ReactDOM from "react-dom/client";
import * as cloudscape from "@cloudscape-design/components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@cloudscape-design/global-styles/index.css";

import { routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback={<cloudscape.AppLayout />}>
      <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>
    </React.Suspense>
  </React.StrictMode>
);
