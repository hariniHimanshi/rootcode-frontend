import React, { useEffect } from 'react';
import { IPost } from '../../models/IPost';
import axiosInstance from '../../common/axios';


const PostList: React.FC = () => {
  const [posts, setPosts] = React.useState<IPost[]>([]);

  const fetchPosts = async () => {
    try {
      const data = await axiosInstance.get('/posts');
      console.log(data);
      // setPosts(data);
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
  <></>
);
}

export default PostList;