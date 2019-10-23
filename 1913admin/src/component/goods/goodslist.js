import React,{Component} from 'react';
import { List, Card,Icon,Input,InputNumber,Button,Pagination} from 'antd';
import GoodsEdit from './component/goodsedit'
import WareHousing from './component/warehousing'
import OutHousing from './component/outhousing'
import './goodslist.less'
const data = [
  {
    title: '葡萄',
  },
  {
    title: '香蕉',
  },
  {
    title: '桃子',
  },
  {
    title: '梨',
  },
];
class GoodsList extends Component {
  constructor(){
    super()
    this.state={
      editState:false,
      comeState:false,
      outState:false
    }
  }
  changeEditState=(state)=>{
    this.setState({editState:state})
  }
  changeComState=(state)=>{
    this.setState({comeState:state})
  }
  changeOutState=(state)=>{
    this.setState({outState:state})
  }
  
  render() { 
    let {editState} = this.state
    return (
      <div>
        {/* 编辑商品 */}
        {!editState || <GoodsEdit changeEditState={this.changeEditState}></GoodsEdit>}
        {!this.state.comeState || <WareHousing　changeComState={this.changeComState}></WareHousing>}
        {!this.state.outState ||　<OutHousing changeOutState={this.changeOutState}></OutHousing>}
        {/* 商品列表 */}
        <div className="list-box">
          <div className="list-top">
            <h4>商品列表</h4>
            <p>商品信息展示，可以进行查询商品、编辑商品、商品入库以及商品出库操作</p>
            <hr/>
            <div className="list-find">
              <ul>
                <li>
                  <span>商品id: </span>
                  <InputNumber min={1} max={10} defaultValue={1} />
                </li>
                <li>
                  <span className="goodsname">商品名称：</span>
                  <Input placeholder="虾" />
                </li>
                <li>
                  <span>分类：</span>
                  <select name="" className="goodscategory">
                    <option value="">全部全部</option>
                    <option value="">在售</option>
                    <option value="">下架</option>
                  </select>
                </li>
                <li>
                  <span>商品状态：</span>
                  <select name="" className="goodscategory">
                    <option value="">全部</option>
                    <option value="">在售</option>
                    <option value="">下架</option>
                  </select>
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
            dataSource={data}
            renderItem={item => (
              <List.Item className="list-content">
                <Card title={item.title}>
                  <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1571720692&di=1935911ae38e195609ffe144b37f4ff6&src=http://sc.jb51.net/uploads/allimg/150504/14-150504120340102.jpg" alt=""/>
                  <ul>
                    <li>
                      <p>商品id:55343</p>
                      <p>分类:水果</p>
                      <p>原价:12.22</p>
                      <p>现价:10.05</p>
                      <p>库存:555</p>
                      <p>销量:555</p>
                      <p>规格:/份</p>
                      <p>原产地:福建</p>
                    </li>
                  </ul>
                  <div className="icons-list">
                    <Icon type="edit" style={{width: "33%"}} onClick={this.changeEditState.bind(this,true)}/>
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