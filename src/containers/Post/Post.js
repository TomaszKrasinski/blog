import React, { Component } from "react";
import "./style.css";
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      comments: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id
    )
      .then((res) => res.json())
      .then((post) => {
        this.setState({ post });
      });

    fetch(
      "https://jsonplaceholder.typicode.com/posts/" +
        this.props.match.params.id +
        "/comments"
    )
      .then((res) => res.json())
      .then((comments) => {
        this.setState({ comments });
        console.log(comments);
      });
  }

  render() {
    return (
      <div>
        <div>
          <h1>{this.state.post.title}</h1>
          <p>{this.state.post.body}</p>
          <p>{this.state.comments.name}</p>
        </div>
        <form>
          <div className="form">
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="text" name="email" />
            </label>
            <label>
              Comment:
              <textarea type="text" name="comment" className="comment" />
            </label>
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    );
  }
}

export default Post;
