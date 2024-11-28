import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function PostForm({ posts, setPosts }) {
  const { api_url } = useContext(GlobalContext);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const postData = {
      title: formData.get("title"),
      content: formData.get("content"),
      image: formData.get("image"),
      categoria: formData.get("categoria"),
      tags: formData
        .get("tags")
        .split(",")
        .map((tag) => tag.trim()),
    };

    fetch(`${api_url}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    })
      .then((resp) => resp.json())
      .then(({ data }) => {
        setPosts(data);
        e.target.reset();
      });
  }

  return (
    <div className="container-form mt-5">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="form-control mb-3"
          placeholder="Titolo"
        />
        <input
          type="text"
          name="image"
          className="form-control mb-3"
          placeholder="Image"
        />
        <textarea
          name="content"
          className="form-control mb-3"
          placeholder="Content"
        />
        <select
          name="categoria"
          className="form-select mb-3"
          defaultValue=""
        >
          <option value="" hidden>
            Seleziona categoria
          </option>
          <option value="News">News</option>
          <option value="Cucina Vegan">Cucina Vegan</option>
          <option value="Animals">Animals</option>
        </select>
        <input
          type="text"
          name="tags"
          className="form-control mb-3"
          placeholder="#tags"
        />
        <div className="mb-3">
          <input
            type="checkbox"
            name="pubblicato"
            className="form-check-input me-2"
          />
          <label className="text-white">Pubblica</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Aggiungi Articolo
        </button>
      </form>
    </div>
  );
} 