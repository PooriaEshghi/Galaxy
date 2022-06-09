import useAxios from "../service/service-users";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostForm from "./newPost/add-new-post";

const Posts = () => {
  const { response, loading, error } = useAxios({
    method: "GET",
    url: "/posts",
    headers: JSON.stringify({ accept: "*/*" }),
    body: JSON.stringify(),
  });
  const initialPost = {
    userId: 1,
    id: 19392,
    title: "title",
    body: "Sample text",
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response]);

  return (
    <div className="App">
      <h1>Posts</h1>

      <PostForm />
      {data.map((ele) => (
        <div key={ele.id} className="container">
          <div>{ele.userId}</div>
          <div>{ele.id}</div>
          <h3>{ele.title}</h3>
          <p>{ele.body}</p>
          <br />
        </div>
      ))}

      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          {error && (
            <div>
              <p>{error.message}</p>
            </div>
          )}
          <div>{data && <p>{data.id}</p>}</div>
        </div>
      )}
    </div>
  );
};
export default Posts;
