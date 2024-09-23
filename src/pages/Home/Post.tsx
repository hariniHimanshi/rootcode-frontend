import React, { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Card, Modal, Form, Input, Divider, Button } from 'antd';
import { IPost } from '../../models/IPost';
import axiosInstance from '../../common/axios';

const { Meta } = Card;

const Post: React.FC<IPost> = (post) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const createComment = async (values: any) => {
    try {
      console.log('values:', values);
      await axiosInstance.post('/post/comment', { ...values, postId: post.id });
      // Optionally, you can trigger a refetch of posts here
      // fetchPosts();
      setIsModalVisible(false); // Close the modal
      form.resetFields(); // Reset the form fields
    } catch (error) {
      console.error('Failed to create comment:', error);
    }
  };

  return (
    <>
      <Card
        style={{ width: 300 }}
        actions={[<EditOutlined key="edit" onClick={showModal} />]}
      >
        <Meta
          title={<span style={{ color: post.color }}>{post.title}</span>}
          description={post.description}
        />
      </Card>

      <Modal
        title="Edit Post"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Card style={{ width: 300 }}>
          <Meta
            title={<span style={{ color: post.color }}>{post.title}</span>}
            description={post.description}
          />
        </Card>
        <Divider />
        <h3>Comments</h3>
        {post?.comments.map((comment) => (
          <Card key={comment.id} style={{ width: 300 }}>
            <p>{comment.description}</p>
          </Card>
        ))}
        <Divider />
        <Form form={form} onFinish={createComment}>
          <Form.Item
            label="Comment"
            name="description"
            rules={[{ required: true, message: 'Please input the comment!' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit Comment</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Post;
