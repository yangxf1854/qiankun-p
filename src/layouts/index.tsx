import { Layout, Menu } from 'antd';
import { Link } from 'umi';

const { Header, Sider, Content } = Layout;
const LayoutIndex = ({children}: any) => {
    console.log(1111);
    
    return (
    <Layout>
        <Sider>
            <Menu mode="inline" theme="dark">
            <Menu.Item key="/index" >
                <Link to="/index">Index</Link>
            </Menu.Item>
            <Menu.Item key="/app">
                <Link to="/App1">App1</Link>
            </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
            <Content
              className="site-layout-background"
              style={{
                minHeight: '100vh',
              }}>{children}
            </Content>
        </Layout>
    </Layout>
    )
}

export default LayoutIndex;