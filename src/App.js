import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center" style={{ margin: "50px 0" }}>
          <h1>
            {" "}
            Fake <i>One Hundred</i> Posts from JSON Placeholder
          </h1>
        </div>
      </div>
      <div className="row">
        {posts &&
          posts.map((post) => (
            <div className="card col-md-4">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
// From the snippet above, once our application loads, we send a GET HTTP request to the API to retrieve the list of posts and render it within the view.

export default App;
