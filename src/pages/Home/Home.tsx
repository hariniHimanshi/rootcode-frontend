import React, { useEffect, useState } from 'react';
import { Breadcrumb, Layout, theme, Button, Modal, Form, Input, Row, Col } from 'antd';
import { useTheme } from '../../context/ThemeContext';
import PostList from './PostList';
import axiosInstance from '../../common/axios';
import ColorPicker from 'react-pick-color';
import { IPost } from '../../models/IPost';

const { Header, Content, Footer } = Layout;

const Home: React.FC = () => {
  const [posts, setPosts] = React.useState<IPost[]>([]);
  const [color, setColor] = useState('#fff');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { bg_theme, bg_toggleTheme } = useTheme();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const createPost = async (values: any) => {
    try {
      await axiosInstance.post('/post', { ...values, color });
      // Optionally, you can trigger a refetch of posts here
      // fetchPosts();
      setIsModalVisible(false); // Close the modal
      form.resetFields(); // Reset the form fields
      await fetchPosts();
    } catch (error) {
      console.error('Failed to create post:', error);
    }
  };
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
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Button type="primary" onClick={bg_toggleTheme}>
          Toggle to {bg_theme === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Row
          justify="center"
          align="middle"
          style={{
            padding: 24,
            minHeight: '80vh',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            backgroundColor: bg_theme === 'light' ? '#fff' : '#333',
            color: bg_theme === 'light' ? '#000' : '#fff',
          }}
        >
          <Col>
            <Button type="primary" onClick={() => setIsModalVisible(true)}>
              Create new post
            </Button>
          </Col>
          <Col span={24} style={{ marginTop: '16px' }}>
            <PostList posts={posts} />
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        RootCode ©{new Date().getFullYear()} Created by Harini Himanshi
      </Footer>

      {/* Modal for creating a post */}
      <Modal
        title="Create New Post"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={createPost}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please input the title!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please input the description!' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Color"
            name="color"
            rules={[{ required: true, message: 'Please input the color!' }]}
          >
            <ColorPicker color={color} onChange={color => setColor(color.hex)} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create Post
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default Home;
