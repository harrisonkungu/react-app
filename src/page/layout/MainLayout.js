import React, { useState } from 'react';
import { Layout } from 'antd';
import SiderMenu from './SiderMenu';
import LayoutBanner from './LayoutBanner';
import './Style.less';
import RoutingList from '../../router/RoutingList';
import Login from '../auth/Login';
import {Route, Link, Routes, useLocation} from 'react-router-dom';
const { Content } = Layout;

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const[loggedin, setLoggedIn]=useState(true)
  const location = useLocation();
  const handleOnCollapse = () => {
    setCollapsed(prevState => !prevState);
  };
  const path = location.pathname.replace("/", "")
  return (
    <Layout style={{ minHeight: '100vh' }}>
{/* check router path here ---conditional statement */}


{path === "" ? <> 
 
        <Layout>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 20 }}>
              <Login />
            </div>
          </Content>
        </Layout>

      </> : <>
        <SiderMenu collapsed={collapsed} handleOnCollapse={handleOnCollapse} />
        <Layout>
          <LayoutBanner
            collapsed={collapsed}
            handleOnCollapse={handleOnCollapse}
          />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 20 }}>
              <RoutingList />
            </div>
          </Content>
        </Layout>




      </>}
    </Layout>
  );
}

export default MainLayout;
