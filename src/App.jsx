import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import PostsPage from "./pages/PostsPage";
import PostDetail from "./pages/PostDetail";
import GlobalContext from "./context/GlobalContext";

function App() {
  const api_url = "http://localhost:3000";

  return (
    <>
      <GlobalContext.Provider value={{ api_url }}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/posts">
                <Route index element={<PostsPage />} />
                <Route path=":title" element={<PostDetail />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
