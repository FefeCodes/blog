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
          <a href="/tanstack">TanStack Router Blog</a>
        </li>
      </ul>
    </div>
  );
}
