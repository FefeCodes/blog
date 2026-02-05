import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../../data/posts";

export default function PostDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);

  if (!post) return <p className="container">Post not found</p>;

  return (
    <div className="container">
      <button onClick={() => navigate(-1)}>← Back</button>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
