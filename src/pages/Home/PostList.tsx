import React, { useEffect } from 'react';
import { IPost } from '../../models/IPost';
import axiosInstance from '../../common/axios';
import Post from './Post';


const PostList: React.FC = () => {
  const [posts, setPosts] = React.useState<IPost[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await axiosInstance.get('/post');
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
  <>
    {posts.map((post) => (
      <Post key={post.id} {...post} />
    ))}
  </>
);
}

export default PostList;