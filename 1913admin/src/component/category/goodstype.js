import React,{Component,Fragment } from 'react'
import ReactDOM from 'react-dom';
import {message, Form, Input, Button} from 'antd';
 
class Inputcreat extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        name: '',
        second: ''
    }
 }
 
 render(){
    // let { name, second } = this.state;
    return (
      <Fragment >
          <Input value={this.state.name} onChange={(e)=>{
       this.setState({name:e.target.value})
     }} />
     <Input value={this.state.second} onChange={(e)=>{
       this.setState({second:e.target.value})
     }} />
     <Button type="primary" onClick={this.submit}>
         创建
        </Button>
      </Fragment>
    )
 }
 submit=()=>{
   this.$axios.get(`/fm/admin/type/addType?name=${this.state.name}&second=${this.state.second}`)
   .then((data)=>{
     console.log(data)
   })
 }
  handlePost = () => {
    const {name,second} = this.state;
    console.log(name,second,'------InputValue');
    //在此做提交操作，比如发dispatch等
    this.$axios.get(`/fm/admin/type/addType?name=${name}&second=${second}`)
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
}
 
export default Inputcreat;