import React,{Component}from 'react';
import './goodshouse.less'
import { Input,Button,Table ,Pagination} from 'antd';
const columns = [
  {
    title: '商品id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '商品名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '库存',
    dataIndex: 'counts',
    key: 'counts',
  },
  {
    title: '入库',
    dataIndex: 'goodin',
    key: 'in',
  },
  {
    title: '出库',
    dataIndex: 'goodout',
    key: 'out',
  }
];
class Goodshouse extends Component {
  constructor(){
    super()
    this.state={
      page:1,
      count:0,
      list:[],
      pState:true,
      goodname:'',
      goodid:''
    }
  }
  componentDidMount(){
    this.houseRender(this.state.page)
  }
  houseRender=(page)=>{
    this.$axios.get(`/fm/admin/house/getHouseByPage?page=${page}&pageSize=5`)
    .then((data)=>{
      console.log(data)
      this.setState({list:data.data.list,count:data.data.count,pState:true})
    })
  }
  findRender=(value)=>{
    this.$axios.get(`/fm/admin/house/getHouseByKw?kw=${value}`)
    .then((data)=>{
      this.setState({list:data.data.list,pState:false})
    })
  }
  pageRender=(goodid,goodname)=>{
    if(goodid===''){
      if(goodname===''){
        this.houseRender(this.state.page)
      }else{
        this.findRender(goodname)
      }
    }else{
      this.findRender(goodid)
    }
  }
  render() { 
    let {pState,goodname,goodid} = this.state
    return (
      <div className='goodhouse'>
        <div className="goodhouse-top">
            <h4>商品出入库</h4>
            <p>商品出入库信息统计，可以进行查询操作</p>
            <hr/>
            <div className="goodhouse-find">
              <ul>
                <li>
                  <span className="goodsid">商品id: </span>
                  <Input type="number"  placeholder={10001} value={this.state.goodid} onChange={(e)=>{
                    this.setState({goodid:e.target.value})
                  }}/>
                </li>
                <li>
                  <span className="goodsname">商品名称：</span>
                  <Input placeholder="虾" value={this.state.goodname} onChange={(e)=>{
                    this.setState({goodname:e.target.value})
                  }}/>
                </li>
                <li>
                  <Button type="primary" onClick={this.pageRender.bind(this,goodname,goodid)}>搜索</Button>
                  <Button onClick={()=>{
                    this.setState({goodname:'',goodid:''})
                  }}>重置</Button>
                </li>
              </ul>
            </div>
          </div>
        <Table dataSource={this.state.list} columns={columns} pagination={false}/>
      {!pState || <Pagination simple defaultCurrent={1} total={this.state.count} pageSize={5} onChange={(page)=>{
          this.houseRender(page)
        }}/>}
      </div>
    );
  }
}


export default Goodshouse