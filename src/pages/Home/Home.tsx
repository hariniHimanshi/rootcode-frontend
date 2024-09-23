import React from 'react';
import { Breadcrumb, Layout, theme, Button } from 'antd';
import { useTheme } from '../../context/ThemeContext';

const { Header, Content, Footer } = Layout;

const Home: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { bg_theme, bg_toggleTheme } = useTheme();

  const createPost = () => {

  }

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
        <div
          style={{
            padding: 24,
            minHeight: '80vh',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            backgroundColor: bg_theme === 'light' ? '#fff' : '#333',
            color: bg_theme === 'light' ? '#000' : '#fff',
            display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}
        >
          <Button type="primary" onClick={createPost}>
            Create new post
          </Button>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        RootCode ©{new Date().getFullYear()} Created by Harini Himanshi
      </Footer>
    </Layout>
  );
};

export default Home;