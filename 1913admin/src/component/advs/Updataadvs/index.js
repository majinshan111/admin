import React,{Component,Fragment} from 'react'

import { Upload, Icon ,Form,Button,Input,message,Modal} from 'antd';
import './index.less'



const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

class Avatar extends React.Component {
  constructor(props){
    super(props)
    this.state={
      adv_swiper_id:props.data.adv_swiper_id||'',
      category_second_id:props.data.category_second_id||'',
      category_name:props.data.category_name||'',
      name:props.data.name||'',
      // loading:false
    }
  }

  //保存按钮
 submit=()=>{
    Modal.success({
        title: '恭喜你，保存成功',
      });
    setTimeout(()=>{
        if(true){
            this.props.refresh()
        }
    },1000)
 }
  render() {
    console.log(this,'信息修改组件')
    return (
      <div  className='updata-box'>
          <div className='updata-body'>
        <Form.Item {...formItemLayout} label="序号">
         <Input value={this.state. adv_swiper_id} onChange={(e)=>{
           this.setState({adv_swiper_id:e.target.value})
         }} />
        </Form.Item>

        <Form.Item {...formItemLayout} label="Id">
         <Input value={this.state.category_second_id} onChange={(e)=>{
           this.setState({category_second_id:e.target.value})
         }} />
        </Form.Item>

        <Form.Item {...formItemLayout} label="名字">
         <Input value={this.state.category_name} onChange={(e)=>{
           this.setState({category_name:e.target.value})
         }}/>
       
        </Form.Item>
        <Form.Item {...formItemLayout} label="所属分类">
          <Input value={this.state.name} onChange={(e)=>{
           this.setState({name:e.target.value})
         }}/>
        </Form.Item>

      
       <Form.Item {...formTailLayout}>
        <Button type="primary" onClick={this.submit}>
         保存
        </Button>
      </Form.Item>
      </div>
      </div>
    );
  }
}
export default Avatar