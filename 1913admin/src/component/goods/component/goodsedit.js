import React,{Component} from 'react'
import { Button,Input,Select } from 'antd';
import './goodsedit.less'
const { Option } = Select;
class goodsEdit extends Component{
    constructor(props){
        super(props)
        this.state={
            goodsname:this.props.data.name,
            goodstype:this.props.data.goodsType,
            nowprice:this.props.data.nowPrice,
            oldprice:this.props.data.oldPrice,
            guige:this.props.data.guige,
            address:this.props.data.addRess
        }
    }
    saveSubmit=((page)=>{
        console.log(this,'我点击了')
        let {goodsname,goodstype,nowprice,oldprice,guige,address} = this.state
        this.$axios.get(`/fm/admin/goods/updateGoods?id=${this.props.data.id}&name=${goodsname}&goodsType=${goodstype}&oldPrice=${oldprice}&nowPrice=${nowprice}&counts=${this.props.data.counts}&sale=${this.props.data.sale}&guige=${guige}&addRess=${address}&state=在售&imgPath=${this.props.data.imgPath}&second=${this.props.data.sencond}`)
        .then((data)=>{
            console.log(data,'编辑成功')
            alert('编辑成功')
            this.props.changeEditState(false)
            this.props.refreshData(page)
        })
    })
    render(){
        let {goodsname,goodstype,nowprice,oldprice,guige,address} = this.state
        // console.log(this,'商品编辑组件')
        return(
            <div className="edit-box">
                <div className="edit-content">
                    <div>
                        <h4>编辑商品</h4>
                        <hr/>
                    </div>
                    <ul>
                        <li>
                            <label>商品名称：</label>
                            <Input type="text" value={goodsname} onChange={(e)=>{
                                this.setState({goodsname:e.target.value})
                            }}/>
                        </li>
                        <li>
                            <label>商品类别：</label>
                            <Select initialValue={goodstype} value={goodstype} style={{width:'50%'}} onChange={(e)=>{
                                console.log(e)
                                this.setState({goodstype:e})
                            }}>
                                <Option value="冷餐冷冻">冷餐冷冻</Option>
                                <Option value="精品水果">精品水果</Option>
                                <Option value="天天鲜食">天天鲜食</Option>
                                <Option value="粮油干货">粮油干货</Option>
                                <Option value="中外名酒">中外名酒</Option>
                                <Option value="休闲零食">休闲零食</Option>
                            </Select>
                        </li>
                        <li>
                            <label>现价：</label>
                            <Input type="number" value={nowprice} onChange={(e)=>{
                                this.setState({nowprice:e.target.value})
                            }}/>
                        </li>
                        <li>
                            <label>原价：</label>
                            <Input type="number" value={oldprice} onChange={(e)=>{
                                this.setState({oldprice:e.target.value})
                            }}/>
                        </li>
                        <li>
                            <label>规格：</label>
                            <Input type="text" value={guige} onChange={(e)=>{
                                this.setState({guige:e.target.value})
                            }}/>
                        </li>
                        <li>
                            <label>原产地：</label>
                            <Input type="text" value={address} onChange={(e)=>{
                                this.setState({address:e.target.value})
                            }}/>
                        </li>
                    </ul>
                    <div className="edit-button">
                        <Button onClick={this.props.changeEditState.bind(this,false)}>取消</Button>
                        <Button type="primary" onClick={this.saveSubmit.bind(this,this.props.nowPage)}>保存</Button>
                    </div>
                </div>
            </div>
        )
    }
}
export default goodsEdit
