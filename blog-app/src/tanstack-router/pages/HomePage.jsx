import { Link } from "@tanstack/react-router";
import { posts } from "../../data/posts";

export default function HomePage() {
  return (
    <div className="container">
      <h1>TanStack Router Blog</h1>

      {posts.map((post) => (
        <div key={post.id} className="card">
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>

          <Link to="/tanstack/post/$id" params={{ id: post.id }}>
            Read more →
          </Link>
        </div>
      ))}
    </div>
  );
}
