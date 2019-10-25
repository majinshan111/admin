import React,{Component} from 'react'
import { Input,Button,Select} from 'antd';
const { Option } = Select;
class findHeader extends Component{
    constructor(){
        super()
        this.state={
            goodsname:'',
            goodstype:'全部',
            goodsstate:'全部'
        }
    }
    render(){
        // console.log(this)
        let {goodsname,goodstype,goodsstate} = this.state
        return(
            <div className="list-find">
              <ul>
                {/* <li>
                  <span>商品id: </span>
                  <InputNumber min={1} max={10} defaultValue={1} />
                </li> */}
                <li>
                  <span className="goodsname">商品名称：</span>
                  <Input placeholder="虾" value={this.state.goodsname} onChange={(e)=>{
                    //   console.log(e.target.value)
                      this.setState({goodsname:e.target.value})
                  }}/>
                </li>
                <li>
                  <span>分类：</span>
                  <Select defaultValue={this.state.goodstype} value={this.state.goodstype} style={{ width: 120 }} onChange={(value)=>{
                      this.setState({goodstype:value})
                    // console.log(value)
                  }}>
                      <Option value="全部">全部</Option>
                   <Option value="冷餐冷冻">冷餐冷冻</Option>
                    <Option value="精品水果">精品水果</Option>
                    <Option value="天天鲜食">天天鲜食</Option>
                    <Option value="粮油干货">粮油干货</Option>
                    <Option value="中外名酒">中外名酒</Option>
                    <Option value="休闲零食">休闲零食</Option>
                  </Select>
                </li>
                <li>
                  <span>商品状态：</span>
                  <Select defaultValue={this.state.goodsstate} value={this.state.goodsstate} style={{ width: 120 }} onChange={(value)=>{
                      console.log(value)
                      this.setState({goodsstate:value})
                  }}>
                    <Option value="全部">全部</Option>
                    <Option value="在售">在售</Option>
                    <Option value="下架">下架</Option>
                  </Select>
                </li>
                <li>
                  <Button type="primary" onClick={this.props.searchData.bind(this,goodsname,goodstype,goodsstate)}>搜索</Button>
                  <Button onClick={()=>{
                      this.setState({goodsname:'',goodstype:'全部',goodsstate:'全部'})
                  }}>重置</Button>
                </li>
              </ul>
            </div>
        )
    }
}
export default findHeader