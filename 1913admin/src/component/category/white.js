import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import {message, Form, Input } from 'antd';
 
class InputDemo extends React.Component{
  state = {
    InputValue : "",//输入框输入值
  };
  handleGetInputValue = (event) => {
    this.setState({
      InputValue : event.target.value,
    })
  };
  handlePost = () => {
    const {InputValue} = this.state;
    console.log(InputValue,'------InputValue');
    //在此做提交操作，比如发dispatch等
    this.$axios.get(`/fm/admin/firsttype/addFirstType?name=${InputValue}`)
    .then((data)=>{
      if(data.data.err===0){
        message.success('添加成功')
        console.log(data)
      }else{
        message.error('添加失败')
        console.log(data)
      }
    })
  };
  render(){
    return(
      <div>
        <input
          value={this.state.InputValue}
          onChange={this.handleGetInputValue}
        />
        <button onClick={this.handlePost}>提交</button>
      </div>
    )
  }
}
 
export default InputDemo;