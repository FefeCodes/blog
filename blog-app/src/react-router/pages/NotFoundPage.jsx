import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div
      className="container"
      style={{ textAlign: "center", paddingTop: "50px" }}
    >
      <h2>404 - Page not found</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
}
