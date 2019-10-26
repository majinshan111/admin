import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {message, Form, Input, Button} from 'antd';
import Housing from './goodstype'
import Listgoods from './list'
import './index.less'

class categorySecond extends Component {
  constructor(props){
    super(props)
    this.state={
        list:['二级分类']
    }
}
changeState=(state)=>{
  this.setState({comeState:state})
}
  render() { 
    let {comeState} = this.state
    return (
      <div className='login-box'>
        {!comeState || <Housing id="creat"　changeState={this.changeState}></Housing>}
        {/* <div className='manage-header'> */}
          {/* <div className='manage-header-nav'>商品分类</div> */}
            <div className='manage-header-foot'>
                     {/* {this.state.list.map((item,index)=>{
                         return (
                             <div key={index}>{item}</div>
                         ) 
                     })} */}
                     <div className='tit' style={{color:'#000'}}>二级分类</div>
                  </div>
               {/* </div> */}
        <div className='manage-footer'><Button onClick={this.changeState.bind(this,true)} className='btn'>添加</Button>
          <Listgoods></Listgoods>
        </div>
      </div>
    );
  }
}

export default categorySecond