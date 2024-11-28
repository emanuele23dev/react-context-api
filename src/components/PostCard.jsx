import { Link } from "react-router-dom";

export default function PostCard({ post, index, onDelete }) {
  return (
    <li className="list-group-item position-relative rounded mb-5">
      <div>
        <h5>{post.title}</h5>
        {post.image && (
          <Link 
            to={`/posts/${post.title.toLowerCase()}`}
            className="text-decoration-none"
          >
            <img
              src={post.image}
              alt={post.title}
              className="img-fluid mb-3"
              style={{ maxWidth: "200px" }}
            />
          </Link>
        )}
        <p>{post.content}</p>
        <small className="text-muted">
          {post.tags?.join(", ")}
        </small>
      </div>
      <button
        className="trash-icon btn btn-link text-danger position-absolute bottom-0 end-0 mb-2 me-2"
        onClick={() => onDelete(post.title, index)}
      >
        <i className="bi bi-trash"></i>
      </button>
    </li>
  );
} 