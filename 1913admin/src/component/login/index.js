import React,{Component}from 'react';
import './index.less'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
// import SidebarLogo from '../admin/SidebarLogo';
import logo from '../assets/images/logo.png';

class Login extends Component {

  render() { 
    
    return (
      <div className='login-box'>
        这里是登录页
      <div className="sidebar-logo">
        <img src={logo} alt="..."/>
        <h2 className="sidebar-logo-content">肥猫超市</h2>
        
      </div>
      <span className='login-span'>请使用您的账号密码登录系统</span>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
        <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              />,
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
        </Form.Item>
        <Form.Item>
        <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
          <button onClick={()=>{
            this.props.history.push('/admin')
          }}>Home</button>
      </div>
    
      
    )
  
}
}

export default Login
