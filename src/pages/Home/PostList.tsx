import { Row,Col } from 'antd';
import { IPost } from '../../models/IPost';
import Post from './Post';

interface IPostListProps {
  posts: IPost[];
}

const PostList: React.FC <IPostListProps> = (posts) => {

  return (
    <Row gutter={16} justify="center">
      {posts.posts.map((post) => (
        <Col key={post.id} span={8} style={{ marginBottom: '16px' }}>
          <Post {...post} />
        </Col>
      ))}
    </Row>
);
}

export default PostList;