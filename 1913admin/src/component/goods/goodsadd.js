import React,{Component}from 'react';
// import CategorySelect from './component/categoryselector'
import { Button,Form,Input,Select } from 'antd';
import './goodsadd.less'
const FormItem = Form.Item
const { Option } = Select;

class GoodsAdd extends Component {
    
    constructor(){
        super()
        this.state={
            img:'',
            goodsname:'',
            typelist:''
        }
    }
    handleReset=()=>{
        this.props.form.resetFields();
    }
    upload=()=>{
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
    submit=(imgpath)=>{
        this.props.form.validateFields((err,data)=>{
            // console.log(imgpath)
            console.log(data.goodName,data.categorySecondId,data.price)
            this.$axios.get(`/fm/admin/goods/addGoods?id=${data.id}&name=${data.goodName}&goodsType=${data.categorySecondId}&oldPrice=${data.originalPrice}&nowPrice=${data.price}&counts=${0}&sale=${0}&guige=${data.spec}&addRess=${data.origin}&state=在售&imgPath=${imgpath}&second=${data.typyid}`)
            .then((data)=>{
                alert('添加成功')
            })
        })
    }
    
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className="goodsadd-box">
                <div>
                    <h4>商品添加</h4>
                    <p>商品信息添加操作</p>
                    <hr/>
                </div>
                <Form layout="vertical">
                    <FormItem label="商品id:">
                        {getFieldDecorator('id', {
                        rules: [{
                            required: true,
                            message: '请输入商品id'
                        }]
                        })(
                        <Input type="number"/>
                        )}
                    </FormItem>
                    <FormItem label="商品名称:">
                        {getFieldDecorator('goodName', {
                        rules: [{
                            required: true,
                            message: '请输入商品名称'
                        }, {
                            max: 20,
                            min: 1,
                            message: '商品名称不能超过20个字符'
                        }]
                        })(
                        <Input type="text"/>
                        )}
                    </FormItem>
                    <FormItem label="商品类别：">
                        {getFieldDecorator('categorySecondId', {
                        rules: [{
                            required: true,
                            message: '请选择商品类别'
                        }]
                        })(
                            // <CategorySelect></CategorySelect>
                            <Select initialValue="冷餐冷冻">
                                {/* {this.typeRenser(typelist)} */}
                                {/* {typelist.map((item)=>{
                                    return(
                                        <Option value={item.name}>{item.name}</Option>
                                    )
                                })} */}
                                <Option value="冷餐冷冻">冷餐冷冻</Option>
                                <Option value="精品水果">精品水果</Option>
                                <Option value="天天鲜食">天天鲜食</Option>
                                <Option value="粮油干货">粮油干货</Option>
                                <Option value="中外名酒">中外名酒</Option>
                                <Option value="休闲零食">休闲零食</Option>
                              </Select>
                        )}
                    </FormItem>
                    <FormItem label="图片:">
                        {getFieldDecorator('image', {
                        rules: [{
                            required: true,
                            message: '请上传商品图片'
                        }]
                        })(
                        <div>
                            <input type="file" ref='file' name="" id=""/>
                            <button onClick={this.upload}>上传</button>
                        </div>
                        )}
                    </FormItem>
                    <FormItem label="现价:">
                        {getFieldDecorator('price', {
                        rules: [{
                            required: true,
                            message: '请输入商品价格'
                        }, {
                            max: 10,
                            message: '价格不能超过十位数'
                        }, {
                            validator: this.priceValidator
                        }]
                        })(
                        <Input type="number"/>
                        )}
                    </FormItem>
                    <FormItem label="原价:">
                        {getFieldDecorator('originalPrice', {
                        rules: [{
                            max: 10,
                            message: '价格不能超过十位数'
                        }, {
                            validator:this.priceValidator
                        }]
                        })(
                        <Input type="number"/>
                        )}
                    </FormItem>
                    <FormItem label="规格:">
                        {getFieldDecorator('spec', {
                        rules: [{
                            required: true ,
                            message: '请输入商品的规格'
                        }]
                        })(
                        <Input />
                        )}
                    </FormItem>
                    <FormItem label="原产地:">
                        {getFieldDecorator('origin', {
                        rules: [{
                            required: true,
                            message: '请输入商品的原产地'
                        }]
                        })(
                        <Input />
                        )}
                    </FormItem>
                    <FormItem label="分类编号:">
                        {getFieldDecorator('typyid', {
                        rules: [{
                            required: true,
                            message: '请输入商品分类编号'
                        }]
                        })(
                        <Input type="number"/>
                        )}
                    </FormItem>
                    <div className="goodsadd-button">
                        <Button type="primary" onClick={this.submit.bind(this,this.state.img)}>添加</Button>
                        <Button onClick={this.handleReset}>重置</Button>
                    </div>
                </Form>
            </div>
          
        )
    }
}
const Add = Form.create({ name: 'advanced_search' })(GoodsAdd);
export default Add