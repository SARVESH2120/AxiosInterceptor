export function Post(props) {
  return (
    <a href="#" onClick={props.postclicked}>
      <div>Id: {props.post.id}</div>
      <div>Title: {props.post.title}</div>
      <div>Description: {props.post.description}</div>
      <div>
        <button onClick={props.postDeleted}>Delete Post</button>
      </div>
    </a>
  );
}
