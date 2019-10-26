import React,{Component} from 'react';
import { List, Card,Icon,Pagination} from 'antd';
import GoodsEdit from './component/goodsedit'
import WareHousing from './component/warehousing'
import OutHousing from './component/outhousing'
import FindHeader from './component/find-header'
import './goodslist.less'
class GoodsList extends Component {
  constructor(){
    super()
    this.state={
      editState:false,
      comeState:false,
      outState:false,
      pState:true,
      editData:null,
      nowPage:1,
      count:0,
      list:[]
    }
  }
  componentDidMount(){
    let page = this.state.nowPage
    this.refreshData(page)
  }
  refreshData=(page)=>{
    this.$axios.get(`/fm/admin/goods/getGoodsByPage?page=${page}&pageSize=6`)
    .then((data)=>{
      console.log(data)
      this.setState({list:data.data.list,count:data.data.count,pState:true,nowPage:page})
      console.log(this.state.list)
    })
  }
  searchList=(value)=>{
    this.$axios.get(`/fm/admin/goods/getGoodsByKw?kw=${value}`)
      .then((data)=>{
         this.setState({list:data.data.list,pState:false})
      })
  }
  searchData=(goodsname,goodstype,goodsstate)=>{
    if(goodsname===''){
      if(goodstype==='全部'){
        if(goodsstate==='全部'){
          this.refreshData(this.state.nowPage)
        }else{
          this.searchList(goodsstate)
        }
      }else{
        this.searchList(goodstype)
      }
    }else{
      this.searchList(goodsname)
    }
    }
  changeEditState=(state,item)=>{
    this.setState({editState:state,editData:item})
    console.log(item)
  }
  changeComState=(state,item)=>{
    this.setState({comeState:state,editData:item})
  }
  changeOutState=(state,item)=>{
    this.setState({outState:state,editData:item})
  }
  
  render() {
    let {list,editState,comeState,outState,editData,pState,nowPage} = this.state
    console.log(nowPage)
    return (
      <div>
        {/* 编辑商品 */}
        {!editState || <GoodsEdit changeEditState={this.changeEditState} data={editData} refreshData={this.refreshData} nowPage={nowPage}></GoodsEdit>}
        {!comeState || <WareHousing　changeComState={this.changeComState} data={editData} refreshData={this.refreshData} nowPage={nowPage}></WareHousing>}
        {!outState ||　<OutHousing changeOutState={this.changeOutState} data={editData} refreshData={this.refreshData} nowPage={nowPage}></OutHousing>}
        {/* 商品列表 */}
        <div className="list-box">
          <div className="list-top">
            <h4>商品列表</h4>
            <p>商品信息展示，可以进行查询商品、编辑商品、商品入库以及商品出库操作</p>
            <hr/>
            <FindHeader searchData={this.searchData}></FindHeader>
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
                    <Icon type="plus" style={{width: "33%"}} onClick={this.changeComState.bind(this,true,item)}/>
                    <Icon type="minus" style={{width: "33%"}} onClick={this.changeOutState.bind(this,true,item)}/>
                </div>
                </Card>
              </List.Item>
            )}
          />
          {!pState || <Pagination simple defaultCurrent={1} total={this.state.count} pageSize={6} onChange={(page)=>{
            this.refreshData(page)
          }}/>}
        </div>
      </div>
    )
  }
}


export default GoodsList