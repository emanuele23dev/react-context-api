import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import PostCard from "./PostCard";

export default function PostsList({ posts, setPosts }) {
  const { api_url } = useContext(GlobalContext);

  const deletePost = (title, index) => {
    fetch(`${api_url}/posts/${title}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        setPosts((prev) => prev.filter((_, i) => i !== index));
      });
  };

  return (
    <ul className="list-group mt-5 mb-3">
      {posts.map((post, index) => (
        <PostCard 
          key={index} 
          post={post} 
          index={index}
          onDelete={deletePost}
        />
      ))}
    </ul>
  );
} 