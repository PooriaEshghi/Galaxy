import "./App.css";

import Article from "./Article";

import Posts from "./components/posts";
import Users from "./components/users";
import PostForm from "./components/newPost/add-new-post";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/expens-tracker/header";

function App() {
  return (
    <div className="App">
      <h1>
        <Link to="/">Galaxy!</Link>
      </h1>
      <Routes>
        <Route path="/" element={<Article />} />
        <Route path="/header" element={<Header />} />
        <Route path="/newpost" element={<PostForm />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
