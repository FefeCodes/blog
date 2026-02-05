import { Link } from "@tanstack/react-router";

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>404 - Page Not Found</h2>
      <Link to="/tanstack">Go Home</Link>
    </div>
  );
}
