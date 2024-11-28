import { useState, useEffect, useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import PostsList from "../components/PostsList";
import PostForm from "../components/PostForm";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const { api_url } = useContext(GlobalContext);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch(`${api_url}/posts`)
      .then((resp) => resp.json())
      .then(({ data }) => setPosts(data));
  };

  return (
    <div className="container">
      <h1 className="title">React Blog Pages</h1>
      <PostForm posts={posts} setPosts={setPosts} />
      <PostsList posts={posts} setPosts={setPosts} />
    </div>
  );
} 