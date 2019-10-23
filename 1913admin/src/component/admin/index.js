import React from 'react';
// import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon ,Dropdown} from 'antd';
import SidebarLogo from './SidebarLogo';
import { Link } from 'react-router-dom';
// import './index.less'

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  renderOverlay() {
    return (
      <Menu >
        <Menu.Item>
          <Link to="/login">
            退出
          </Link>
        </Menu.Item>
      </Menu>
    )
  }

  render() {
      console.log(this)
      const menu = this.renderOverlay()
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          {/* <div className="logo" /> */}
          <SidebarLogo className="logo"/>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">

              <Link to="/admin/home">
              <Icon type="dashboard" />
              <span>首页</span>
            </Link>
            </Menu.Item>
            {/* <Menu.Item key="2">
            <Link to="/admin/users">
              <Icon type="user" />
              <span>用户信息管理</span>
            </Link>
            </Menu.Item> */}
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>用户信息管理</span>
                </span>
              }
            >
              <Menu.Item key="2">
              <Link to="/admin/usermsg">
                <span>修改信息</span>
              </Link>
                  </Menu.Item>
              <Menu.Item key="3">
              <Link to="/admin/userpas">
                <span>修改密码</span>
              </Link>
                  </Menu.Item>
              
            </SubMenu>
           
             <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="table" />
                  <span>商品信息管理</span>
                </span>
              }
            >
              <Menu.Item key="4">
              <Link to="/admin/goodslist">
                <span>商品查询</span>
              </Link>
                  </Menu.Item>
              <Menu.Item key="5">
              <Link to="/admin/goodsadd">
                <span>商品添加</span>
              </Link>
                  </Menu.Item>
                  <Menu.Item key="6">
              <Link to="/admin/goodshouse">
                <span>商品出入库</span>
              </Link>
                  </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="tags-o" />
                  <span>商品分类管理</span>
                </span>
              }
            >
              <Menu.Item key="7">
              <Link to="/admin/categoryfirst">
                <span>一级分类</span>
              </Link>
                  </Menu.Item>
              <Menu.Item key="8">
              <Link to="/admin/categorysecond">
                <span>二级分类</span>
              </Link>
                  </Menu.Item>
              
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="profile" />
                  <span>订单信息管理</span>
                </span>
              }
            >
              <Menu.Item key="9">
              <Link to="/admin/orders">
                <span>订单查询</span>
              </Link>
                  </Menu.Item>
              <Menu.Item key="10">
              <Link to="/admin/orderdispatch">
                  <span>订单配送&nbsp;&nbsp;</span>
                </Link>
                  </Menu.Item>
              <Menu.Item key="11">
              <Link to="/admin/orderrefund">
                  <span>退款处理&nbsp;&nbsp;</span>
                </Link>
                  </Menu.Item>
            </SubMenu>
            <Menu.Item key="12">
            <Link to="/admin/advs">
              <Icon type="switcher" />
              <span>滑动广告管理</span>
            </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} className='head'>
              <div>
                <Breadcrumb.Item>主页</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </div>
              <div>
                  <Dropdown overlay={menu} className='head-right'>
                      <li className="nav-item">
                        <Icon
                          type="user"
                        />
                      </li>
                </Dropdown>
              </div>
              
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360}}>{this.props.children}</div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
      </Layout>
    );
  }
}

// ReactDOM.render(<SiderDemo />, mountNode);
export default SiderDemo