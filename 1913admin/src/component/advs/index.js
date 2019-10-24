import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'antd';
import Listmanage from './list'
import './index.less'
import My from './img/my.png'
import Home from './img/home.jpg'

class Advs extends Component {
  constructor(props){
    super(props)
    this.state={
        list:['主页  /  广告管理','广告管理','广告信息展示，可以进行新增广告、修改广告、删除广告。注意：最多只允许存在5个广告位。']
    }
}
  render() { 
   
    return (
      <div className='login-box'>
        <div className='manage-header'>
                  <div className='manage-header-nav'>
                    <div className='z1'><a href='http://localhost:3000/#/admin/home'><img src={Home}/></a></div> 
                    <div className='z2'><a href='http://localhost:3000/#/admin/users'><img src={My}/></a></div>
                  </div>
                  <div className='manage-header-foot'>
                     {this.state.list.map((item,index)=>{
                         return (
                             <div key={index}>{item}</div>
                         ) 
                     })}
                    <Link to='/admin/add' className='btn'><Button>新增广告</Button></Link>
                  </div>
               </div>
               <div className='manage-footer'>
                 <Listmanage></Listmanage>
               </div>
      </div>
    );
  }
}


export default Advs