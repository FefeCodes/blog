import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/HomePage"));
const PostDetail = lazy(() => import("./pages/PostDetailsPage"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));

export default function ReactRouterApp() {
  return (
    <Suspense fallback={<p>Loading React Router blog...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post/:id" element={<PostDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
