import React, { Component } from 'react'
import {Button} from 'antd'
import {withRouter} from 'react-router-dom'
import './operate.less'
class Change extends Component{
   
       render(){
            console.log(this,'Change')
            return(
                <div>
                    <Button className='changeMsg'onClick={()=>{
                          this.props.history.push('/admin/goodsadd')
                    }}>修改信息</Button>
                    <Button className='changePas'>修改密码</Button>
    
                </div>
            )
       }
    }
    export default withRouter(Change)