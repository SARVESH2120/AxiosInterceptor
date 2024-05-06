import axios from "axios";
import { useState } from "react";

export function AddPost(props:any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function onCreatePost(e:any) {
    e.preventDefault();
    const postData = {
      title,
      description,
    };

    axios
      .post(
        `https://ajaxinterceptor-default-rtdb.firebaseio.com/posts.json`,
        postData
      )
      .then((response) => {
        props.onPostAdded();
      });
  }

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={onCreatePost}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </div>
        <div>
          <label>Description: </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description"
          ></textarea>
        </div>
        <div>
          <button type="submit">Create Post</button>
        </div>
      </form>
    </div>
  );
}
