import React,{Component} from 'react'
import { Button,Form,Input } from 'antd';
import CategorySelect from './categoryselector'
import './goodsedit.less'
const FormItem = Form.Item
class goodsEdit extends Component{
    constructor(props){
        super(props)
    }
    // componentDidMount(){
    //     setFieldsValue({['goodsname']:this.props.data.name})
    // }
    render(){
        const { getFieldDecorator} = this.props.form;
        // console.log(this,'商品编辑组件')
        return(
            <div className="edit-box">
                <Form layout="vertical">
                    <div>
                        <h4>编辑商品</h4>
                        <hr/>
                    </div>
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
                            <CategorySelect />
                        )}
                    </FormItem>
                    {/* <FormItem label="图片:">
                        {getFieldDecorator('image', {
                        rules: [{
                            required: true,
                            message: '请上传商品图片'
                        }]
                        })(
                        <Upload
                            name="image"
                            listType="picture"
                            className="avatar-uploader"
                            showUploadList={false}
                            beforeUpload={this.beforeUpload}
                        >
                            {imageUrl ? <img src={imageUrl} alt="" /> : uploadButton}
                        </Upload> 
                        )}
                    </FormItem> */}
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
                    <div className="edit-button">
                        <Button onClick={this.props.changeEditState.bind(this,false)}>取消</Button>
                        <Button type="primary">保存</Button>
                    </div>
                </Form>
            </div>
        )
    }
}
const Editgoods = Form.create({ name: 'advanced_edit' })(goodsEdit);
// const Edit = Form.create({
//     mapPropsToFields(props){
//         console.log(props)
//         return{
//             [goodsname]:Form.createFormField({
//                 value:props.data.name
//             })
//         }

//     }
// })(Editgoods)
export default Editgoods
