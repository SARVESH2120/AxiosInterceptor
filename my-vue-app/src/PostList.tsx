import React from 'react';
import { useGetPostsQuery } from './api';

const PostList: React.FC = () => {
  const { data, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.error?.status}</div>;

  return (
    <div>
      <h1>PostsList</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
