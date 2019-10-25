import React,{Component,Fragment} from 'react'
import Base64  from 'base-64';
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
    title: '恭喜你，创建成功',
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
      img:'',
      // loading:false
    }
  }

  // handleChange = info => {
  //   if (info.file.status === 'uploading') {
  //     this.setState({ loading: true });
  //     return;
  //   }
  //   if (info.file.status === 'done') {

  //     getBase64(info.file.originFileObj, img =>
  //       this.setState({
  //         img,
  //         loading: false,
  //       }),
  //     );
  //   }
  // };
  handleChange=()=>{
    let file = this.refs.file.files[0]
        let formdata = new FormData()
        formdata.append('hehe',file)
        // console.log(formdata.get('hehe'))
        // console.log(file)
        let config = {
            headers:{'Content-Type':'multipart/form-data'}
        }
        this.$axios.post('/fm/admin/file/img',formdata,config)
        .then((data)=>{
            console.log(data)
            let imgpath = 'http://10.60.14.254:3000' + data.data.imgPath
            console.log(imgpath)
            this.setState({img:imgpath})
        })
  }
  //保存按钮
 submit=()=>{
   if(this.state.img===''){
     message.error('请先上传图片哦！')
   }else{
      ////请求数据
     this.$axios.get(`/ggv1/admin/addAdvs?adv_swiper_id=${this.state.adv_swiper_id}&category_second_id=${this.state.category_second_id}&category_name=${this.state.category_name}&name=${this.state.name}&img=${this.state.img}`)
     .then((data)=>{
       console.log(data)
     })
      
      
      
      success()

   }
   console.log(this.state)
 }
  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div>添加图片</div>
      </div>
    );
    const { img } = this.state;
    return (
      <Fragment >

          <Icon type="arrow-left" onClick={returnPreviousPage} title='返回'/>
          <h2 >新建广告</h2>

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

        <Form.Item {...formItemLayout} label="图片" >
          <input type="file" ref="file"></input>
          <button onClick={this.handleChange}>上传</button>
      {/* <Upload
        listType="picture-card"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onChange={this.handleChange}
        ref="files"
      >
        {img ? <img src={img} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload> */}
      {/* <div>
        <input type="file" ref="file"/>
        <button onClick={this.handleChange}>上传</button>
        <img src={this.state.img} />
      </div> */}
        </Form.Item>
      
       <Form.Item {...formTailLayout}>
        <Button type="primary" onClick={this.submit}>
         创建
        </Button>
      </Form.Item>
      </Fragment>
    );
  }
}
export default Avatar


