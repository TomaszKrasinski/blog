import React from "react";
import "./style.css";

import Card from "../../components/Card/card";

class Home extends React.Component {
  state = {
    loading: true,
    posts: [],
  };

  getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          this.setState({
            loading: false,
            posts: data,
          });
        }
      });
  }

  componentDidMount() {
    this.getPosts();
  }
  render() {
    const { loading, posts } = this.state;
    console.log(posts);
    return (
      <div className="content-center">
        <h1>List of posts</h1>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="post-list">
            {posts.map((post, index) => {
              return (
                <Card key={"card-" + index} id={post.id} title={post.title} />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Home;
