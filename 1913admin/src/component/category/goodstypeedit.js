import React,{Component} from 'react'
import { Button,Form,Input } from 'antd';
import CategorySelect from './categoryselector'
// import './goodsedit.less'
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
        return(
            <div className="edit-box">
                <Form layout="vertical">
                    <div>
                        <h4>编辑商品类别</h4>
                        <hr/>
                    </div>
                    <FormItem label="商品类别名称:">
                        {getFieldDecorator('name', {
                        rules: [{
                            required: true,
                            message: '请输入商品类别名称'
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
export default Editgoods