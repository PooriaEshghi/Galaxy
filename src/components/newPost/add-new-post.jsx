import React, { useState, useEffect } from "react";
import useAxios from "../../service/service-users";
import "./add-new-post.style.css";

const PostForm = () => {
  const { response, loading, error } = useAxios({
    method: "POST",
    url: "/posts",
    headers: JSON.stringify({ accept: "*/*" }),
    body: JSON.stringify({
      userId: 1,
      id: 19392,
      title: "title",
      body: "Sample text",
    }),
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setData(response);
      console.log(response);
    }
  }, [response]);
  const initialPost = {
    userId: 1,
    id: 1,
    title: "",
    body: "",
  };

  const [posts, setPosts] = useState(data);
  const [newBody, setNewBody] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [post, setPost] = useState([]);

  const resetPostForm = () => {
    setPosts(initialPost);
  };

  const addPost = (e) => {
    e.preventDefault();
    const postObj = {
      userId: Math.floor(Math.random() * 10000000000),
      id: posts.length + 1,
      title: newTitle,
      body: newBody,
    };
    setPost(postObj);
    setPosts(data.concat(post));
    console.log(data);
    resetPostForm();
  };

  const handleNewBody = (e) => {
    setNewBody(e.target.value);
  };

  const handleNewTitle = (e) => {
    setNewTitle(e.target.value);
  };

  return (
    <div className="form-container">
      <h2>Hi dear user</h2>
      <span>Write a post</span>
      <form onSubmit={addPost}>
        <input
          type="text"
          value={newTitle}
          placeholder="Add a title"
          onChange={handleNewTitle}
        />
        <input
          type="text"
          value={newBody}
          placeholder="Add a new post"
          onChange={handleNewBody}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
};
export default PostForm;
