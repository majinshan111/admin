import React,{Component}from 'react';


class Login extends Component {

  render() { 
    
    return (
      <div className='login-box'>
        这里是登录页
        <button onClick={()=>{
                    this.props.history.push('/admin')
                }}>Home</button>
      </div>
    );
  }
}


export default Login