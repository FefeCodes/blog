import { useParams, useNavigate } from "@tanstack/react-router";
import { posts } from "../../data/posts";

export default function PostDetailsPage() {
  const { id } = useParams({ from: "/tanstack/post/$id" });
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === id);

  if (!post) return <p className="container">Post not found</p>;

  return (
    <div className="container">
      <button onClick={() => navigate({ to: "/tanstack" })}>← Back</button>

      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
