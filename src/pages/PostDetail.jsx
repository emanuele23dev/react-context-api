import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function PostDetail() {
  const { title } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${encodeURIComponent(title)}`)
      .then((resp) => resp.json())
      .then((response) => {
        setPost(response.data);
      })
      .catch(error => {
        console.error("Error fetching post:", error);
      });
  }, [title]);

  if (!post) {
    return <div className="container mt-5">Caricamento...</div>;
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4">
            <h1 className="mb-4">{post.title}</h1>
            
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="img-fluid mb-4"
                style={{ maxWidth: "400px" }}
              />
            )}
            
            <p className="mb-4">{post.content}</p>

            <div className="mb-4" style={{ color: '#6c757d' }}>
              {post.tags?.map((tag, index) => (
                <span key={index}>
                  {tag}
                  {index < post.tags.length - 1 ? ', ' : ''}
                </span>
              ))}
            </div>

            <Link 
              to="/posts" 
              className="btn btn-primary"
              style={{ width: 'fit-content' }}
            >
              Torna alla lista
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 