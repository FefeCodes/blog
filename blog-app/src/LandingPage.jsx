import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="container">
      <h1>Blog Router Comparison</h1>
      <p>Select a routing experience:</p>

      <ul>
        <li>
          <Link to="/react-router">React Router Blog</Link>
        </li>
        <li>
          <Link to="/tanstack">TanStack Router Blog</Link>
        </li>
      </ul>
    </div>
  );
}
