import { NavLink } from "react-router-dom";
export default function NavMenu() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Chi siamo</NavLink>
      <NavLink to="/posts">Blog Posts</NavLink>
    </nav>
  );
}
