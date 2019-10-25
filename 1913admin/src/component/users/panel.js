import React,{Component} from 'react'
import './Panel.less'
class Panel extends Component{

  render(){
    return(
        <div>
            <div className='Panel'>
            <h2 className='user-list'>用户列表</h2>
            <p className='opeart'>用户信息展示，可以进行修改用户个人信息，修改用户密码操作</p>
            </div>
        </div>
      
    )
  }
}
export default Panel