import React,{Component,Fragment} from 'react'

import { Upload, Icon ,Form,Button,Input,message,Modal} from 'antd';
// import './index.less'
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
   //提交时弹出成功
function success() {
  Modal.success({
    title: '恭喜你，保存成功',
  });
}
 //页面跳转
 function returnPreviousPage() 
{ 
    window.history.back();    
}


const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

class Avatar extends React.Component {
  constructor(){
    super()
    this.state={
      adv_swiper_id:'',
      category_second_id:'',
      category_name:'',
      name:'',
      image:'',
      // loading:false
    }
  }
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {

      getBase64(info.file.originFileObj, image =>
        this.setState({
          image,
          loading: false,
        }),
      );
    }
  };

  //保存按钮
 submit=()=>{
   if(this.state.image===''){
     message.error('请先上传图片哦！')
   }else{
      success()
   }
   console.log(this.state.image)
 }
  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div>添加图片</div>
      </div>
    );
    const { image } = this.state;
    return (
      <Fragment >

          <Icon type="arrow-left" onClick={returnPreviousPage} title='返回'/>
          <h2 >新建广告</h2>

        <Form.Item {...formItemLayout} label="序号">
         <Input value={this.state. adv_swiper_id} onChange={(e)=>{
           this.setState({adv_swiper_id:e.target.value})
         }} />
        </Form.Item>

        <Form.Item {...formItemLayout} label="编码">
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

        <Form.Item {...formItemLayout} label="图片" >
      <Upload
        listType="picture-card"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onChange={this.handleChange}
      >
        {image ? <img src={image} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
        </Form.Item>
      
       <Form.Item {...formTailLayout}>
        <Button type="primary" onClick={this.submit}>
         保存
        </Button>
      </Form.Item>
      </Fragment>
    );
  }
}
export default Avatar


