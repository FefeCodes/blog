import {
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from "@tanstack/react-router";
import HomePage from "./pages/HomePage";
import PostDetailsPage from "./pages/PostDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

const rootRoute = createRootRoute({
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tanstack",
  component: HomePage,
});

const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tanstack/post/$id",
  component: PostDetailsPage,
});

const routeTree = rootRoute.addChildren([homeRoute, postRoute]);

export const tanstackRouter = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundPage,
});
