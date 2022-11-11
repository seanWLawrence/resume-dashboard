import * as React from "react";
import * as router from "react-router-dom";

import { AppLayout } from "../layouts/app.layout";

const SummaryPage = React.lazy(() => import("../pages/summary.page"));
const ErrorPage = React.lazy(() => import("../pages/summary.page"));

export const routes: router.RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: "/", element: <SummaryPage /> }],
  },
];
