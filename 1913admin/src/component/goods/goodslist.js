import React,{Component} from 'react';
import { List, Card,Icon,Input,InputNumber,Button,Pagination,Select} from 'antd';
import GoodsEdit from './component/goodsedit'
import WareHousing from './component/warehousing'
import OutHousing from './component/outhousing'
import './goodslist.less'
const { Option } = Select;
class GoodsList extends Component {
  constructor(){
    super()
    this.state={
      editState:false,
      comeState:false,
      outState:false,
      editData:null,
      list:[]
    }
  }
  componentDidMount(){
    this.$axios.get('/fm/admin/goods/getGoods')
    .then((data)=>{
      // console.log(data)
      this.setState({list:data.data.list})
      console.log(this.state.list)
    })
  }
  changeEditState=(state,item)=>{
    this.setState({editState:state,editData:item})
    console.log(item)
  }
  changeComState=(state)=>{
    this.setState({comeState:state})
  }
  changeOutState=(state)=>{
    this.setState({outState:state})
  }
  
  render() {
    let {list,editState,comeState,outState,editData} = this.state
    return (
      <div>
        {/* 编辑商品 */}
        {!editState || <GoodsEdit changeEditState={this.changeEditState} data={editData}></GoodsEdit>}
        {!comeState || <WareHousing　changeComState={this.changeComState}></WareHousing>}
        {!outState ||　<OutHousing changeOutState={this.changeOutState}></OutHousing>}
        {/* 商品列表 */}
        <div className="list-box">
          <div className="list-top">
            <h4>商品列表</h4>
            <p>商品信息展示，可以进行查询商品、编辑商品、商品入库以及商品出库操作</p>
            <hr/>
            <div className="list-find">
              <ul>
                {/* <li>
                  <span>商品id: </span>
                  <InputNumber min={1} max={10} defaultValue={1} />
                </li> */}
                <li>
                  <span className="goodsname">商品名称：</span>
                  <Input placeholder="虾" />
                </li>
                <li>
                  <span>分类：</span>
                  <Select defaultValue="lucy" style={{ width: 120 }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </li>
                <li>
                  <span>商品状态：</span>
                  <Select defaultValue="全部" style={{ width: 120 }}>
                    <Option value="全部">全部</Option>
                    <Option value="在售">在售</Option>
                    <Option value="下架">下架</Option>
                  </Select>
                </li>
                <li>
                  <Button type="primary">搜索</Button>
                  <Button>重置</Button>
                </li>
              </ul>
            </div>
          </div>
          <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={list}
            renderItem={item => (
              <List.Item className="list-content">
                <Card title={item.name}>
                  <img src={item.imgPath} alt=""/>
                  <ul>
                    <li>
                      <p>商品id:{item.id}</p>
                      <p>分类:{item.goodsType}</p>
                      <p>原价:{item.oldPrice}</p>
                      <p>现价:{item.nowPrice}</p>
                      <p>库存:{item.counts}</p>
                      <p>销量:{item.sale}</p>
                      <p>规格:{item.guige}</p>
                      <p>原产地:{item.addRess}</p>
                    </li>
                  </ul>
                  <div className="icons-list">
                    <Icon type="edit" style={{width: "33%"}} onClick={this.changeEditState.bind(this,true,item)}/>
                    <Icon type="plus" style={{width: "33%"}} onClick={this.changeComState.bind(this,true)}/>
                    <Icon type="minus" style={{width: "33%"}} onClick={this.changeOutState.bind(this,true)}/>
                </div>
                </Card>
              </List.Item>
            )}
          />
          <Pagination simple defaultCurrent={2} total={50} pageSize={18} />
        </div>
      </div>
    )
  }
}


export default GoodsList