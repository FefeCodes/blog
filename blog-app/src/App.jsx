import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import ReactRouterApp from "./react-router/ReactRouterApp";
import TanstackRouterApp from "./tanstack-router/TanstackRouterApp";
import { ErrorBoundary } from "./shared/ErrorBoundary";
import NotFound from "./react-router/pages/NotFoundPage";

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/react-router/*" element={<ReactRouterApp />} />

          <Route path="/tanstack/*" element={<TanstackRouterApp />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
