import { Component } from "react";
import { Post } from "../Post/Post";
import axios from "axios";
import { FunctionalSinglePostDetails } from "../FunctionalSinglePostDetails/FunctionalSinglePostDetails";
import { AddPost } from "../AddPost/AddPost";

export default class Posts extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      posts: [],
      selectedPostId: null,
      isAddPost: false,
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    this.setState({
      isAddPost: false,
    });
    axios
      .get(`https://ajaxinterceptor-default-rtdb.firebaseio.com/posts.json`)
      .then((response) => {
        const posts = [];
        for (let key in response.data) {
          posts.push({ ...response.data[key], id: key });
        }

        this.setState({
          posts: posts,
        });
      });
  };

  onPostClickHandler = (id) => {
    this.setState({
      selectedPostId: id,
    });
  };

  onAddPostHandler = () => {
    this.setState({
      isAddPost: true,
    });
  };

  onPostDeleteHandler = (id, e) => {
    e.stopPropagation();

    if (window.confirm("Are you sure you want to delete")) {
      axios
        .delete(
          `https://ajaxinterceptor-default-rtdb.firebaseio.com/posts/${id}.json`
        )
        .then((response) => {
          this.getPosts();
        });
    }
  };

  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Post
          key={post.id}
          post={post}
          postclicked={this.onPostClickHandler.bind(this, post.id)}
          postDeleted={this.onPostDeleteHandler.bind(this, post.id)}
        />
      );
    });
    return (
      <div>
        <div>
          <div>
            <div>
              <h1>Posts Data</h1>
              <a href="#" onClick={this.onAddPostHandler}>
                Create Post
              </a>
            </div>
            <div>{posts}</div>
          </div>
          {this.state.selectedPostId && (
            <div>
              <h2>Post details</h2>
              <FunctionalSinglePostDetails id={this.state.selectedPostId} />
            </div>
          )}
        </div>
        {this.state.isAddPost && (
          <div className="my-3">
            <AddPost onPostAdded={this.getPosts} />
          </div>
        )}
      </div>
    );
  }
}
