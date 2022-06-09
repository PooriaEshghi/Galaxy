// import logo from './logo.svg';
import "./App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import agent from "./service/service-api";
import * as Config from "../src/config/config";

const Article = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // let a  = AjaxService.doAjax()
    if (data?.copyright.length > 0) return;
    agent.get(Config.ARTICLE_URL).then((resp) => setData(resp.data));
    // console.log('request', agent.Article)
    //  axios.get("https://api.nasa.gov/planetary/apod?api_key=WckuB7f8vWvmurXGb5839JLJLZtCerJIO75Sx4tG")
    //  .then(resp => setData(resp.data))
  }, []);

  return (
    <div className="container">
      {!data && <p>please waite</p>}
      {data && (
        <div>
          <h1>{data.title}</h1>
          <img src={data.url} width={300} />
          <p>{data.explanation}</p>
        </div>
      )}
      <h2>
        <Link to="/header">Expense Tracker</Link>
      </h2>
      <h2>
        <Link to="/posts">Show all posts</Link>
      </h2>
      <h2>
        <Link to="/users">Show all users</Link>
      </h2>
    </div>
  );
};
export default Article;
