import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { IPost } from '../../models/IPost';

const { Meta } = Card;

const Post: React.FC<IPost> = (post) => (
  <Card
    style={{ width: 300 }}
    actions={[
      <EditOutlined key="edit" />,
    ]}
  >
    <Meta
      title={<span style={{ color: post.color }}>{post.title}</span>} // Set title color
      description={post.description}
    />
  </Card>
);

export default Post;
