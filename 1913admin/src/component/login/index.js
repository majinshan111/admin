import React from 'react';
import './index.less'
import { Form, Icon, Input, Button, Checkbox ,message} from 'antd';
// import SidebarLogo from '../admin/SidebarLogo';
import logo from '../assets/images/logo.png';

class Login extends React.Component {
  submit=()=>{
    console.log('登录')
    // let result=this.props.form.getFieldsValue()
    // console.log(result)
    this.props.form.validateFields((err,data)=>{
        if(err){
            message.error('输入信息有误请重试')
        }else{
          // this.$axios.get('/yapi/admin/login',{us:123,ps:123})
          this.$axios.post('/login/admin/user/login',{us:data.us,ps:data.ps})
            .then((data)=>{
              console.log(data)
              message.success('登录成功1后跳转首页',1,()=>{
                this.props.history.push('/admin')
            })
            })
         
        }
        console.log(err,data)
    })
}

  render() { 
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login-box1'>
        .
      <div className="sidebar-logo">
        <img src={logo} alt="..."/>
        <h2 className="sidebar-logo-content">肥猫超市</h2>
        
      </div>
      <span className='login-span'>请使用您的账号密码登录系统</span>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
        {getFieldDecorator('us',{
                rules: [{ required: true, message: 'Please input your username!' },
                // { min: 6, message: '用户名长度6到9位！' },
                // { max: 9, message: '用户名长度6到9位！' },
            ],
            })(
        <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              />,
              )}
        </Form.Item>
        <Form.Item>
        {getFieldDecorator('ps',{})(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
            )}
        </Form.Item>
        <Form.Item>
        <Checkbox>记住密码</Checkbox>
          <a className="login-form-forgot" href="">
            忘记密码？
          </a>
        </Form.Item>
        <Button type="primary" onClick={this.submit} className="login-form-button">
            登录
          </Button>
      </Form>
          <button onClick={()=>{
            this.props.history.push('/admin')
          }}>Home</button>
      </div>
    
      
    )
  
}
}

export default Form.create()(Login)
