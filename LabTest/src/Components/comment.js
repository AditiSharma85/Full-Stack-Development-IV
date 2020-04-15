import React from "react";
import Likes from "././likes";

class Comment extends React.Component {
  
  state = {
    posts: [],
    comment: ""
  };


  handleChange = event => {
      this.setState({comment: event.target.value})
    };

  addNewComment = event => {
    event.preventDefault();
    let tempComment = this.state.comment;
    let tempPosts = this.state.posts;
    tempPosts.push(tempComment);
    this.setState({
      posts: tempPosts,
      comment: ''
    });

  };

  render() {
    return (
      <div>
      <div>
        <form onSubmit = {this.addNewComment}>
          <label>
            Tweet:
            <input type="text" name="comment" onChange = {this.handleChange}/>
          </label>
          <button type="submit">Post</button>
        </form>
      </div>
      <ul>
      {this.state.posts.map(post => (
            <li>
              {post}
              
              <Likes />
              
            </li>
          ))}
      </ul>
      </div>
      );
  }
}

export default Comment;