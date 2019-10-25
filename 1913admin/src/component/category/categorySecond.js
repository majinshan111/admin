import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Housing from './goodstype'
import Listgoods from './list'

class categorySecond extends Component {
  constructor(props){
    super(props)
    this.state={
        list:['主页  /  商品分类管理','二级分类']
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
        <div className='manage-header'>
          <div className='manage-header-nav'>
          </div>
            <div className='manage-header-foot'>
                     {this.state.list.map((item,index)=>{
                         return (
                             <div key={index}>{item}</div>
                         ) 
                     })}
                  </div>
               </div>
        <div className='manage-footer'><button onClick={this.changeState.bind(this,true)}>添加</button>
          <Listgoods></Listgoods>
        </div>
      </div>
    );
  }
}

export default categorySecond