// src/tanstack-router/TanstackRouterApp.jsx
import { RouterProvider } from "@tanstack/react-router";
import { tanstackRouter } from "./Router";

export default function TanstackRouterApp() {
  return <RouterProvider router={tanstackRouter} />;
}
