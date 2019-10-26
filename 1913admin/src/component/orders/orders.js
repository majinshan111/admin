import React,{Component}from 'react';
import {Table,InputNumber,Input,DatePicker,Select,Button,Pagination } from 'antd';
const {  RangePicker } = DatePicker;

class Orders extends Component {
 
  constructor(){
    super()
    this.state={
      list:[],
      nowPage:1,
      count:1,
      inputvalue1:'',
      inputvalue2:'',
      inputvalue3:'',
      inputvalue4:''
    }
  }
  componentDidMount(){
    let  page= this.state.nowPage
     this.refreshData(page)
  }
  refreshData(page){
    // let  pages= this.state.nowPage
    this.$axios.get(`/fm/admin/order/getOrderByPage?page=${page}&pageSize=5`)
    .then((data)=>{
      console.log(data)
      console.log(data.data.count)
      this.setState({list:data.data.list,count:data.data.count})
      
    })
  }
  submit=(value)=>{
    this.$axios.get(`/fm/admin/order/getOrderByKw?kw=${value}`)
    .then((data)=>{
      console.log(data)
      this.setState({list:data.data.list,count:data.data.list.length})
    })
  }
  orderSubmit(inputvalue1,inputvalue2,inputvalue3,inputvalue4){
    if(inputvalue1===''){
      if(inputvalue2===''){
        if(inputvalue3===''){
          if(inputvalue4==='全部'){
            let  page= this.state.nowPage
            this.refreshData(page)
          }else{
            this.submit(inputvalue4)
          }
        }else{
          this.submit(inputvalue3)
        }
      }else{
        this.submit(inputvalue2)
      }
    }else{
      this.submit(inputvalue1)
    }
  }

  render() { 
    let {inputvalue1,inputvalue2,inputvalue3,inputvalue4} =  this.state
    console.log(this.state.list)
   

    const columns = [
      { title: 'id', dataIndex: 'orderId', key: 'orderId' },
      { title: '用户id', dataIndex: 'userId', key: 'useId' },
      { title: '总价', dataIndex: 'price', key: 'price' },
      { title: '订单状态', dataIndex: 'status', key: 'status' },
      { title: '下单时间', dataIndex: 'createTime', key: 'address' },
     
      
    ];
    
    // let  data = {this.state.list}
    const { Option } = Select;
    return(
      < div className='order-box' >
          <div>
            <h3 style={{fontSize:24}}>订单查询</h3>
            <p>展示全部订单信息，组合查询订单信息</p>
            <hr style={{background:'#000'}}/>
          </div>
        <div className='order-boxss'>
          
         
          <div style={{ marginTop:30}}>
          <div style={{ display:'flex'}}>
          <div style={{ display:'flex',width:240,height:64,padding:'0 12px'}}><div style={{width:25,height:32,fontSize:14,lineHeight:'32px'}}>id:
            </div><InputNumber type='text' min={100000} max={1000000000} defaultValue={3}  style={{ width: 200}} value={this.state.inputvalue1} 
          onChange={(e)=>{
            this.setState({inputvalue1:e})
          }} /></div >
        
        <div  style={{ display:'flex',width:300,height:64,padding:'0 12px'}} >
          <div style={{width:70,height:32,fontSize:14,lineHeight:'32px'}}>
            用户名称:</div > <Input type='text' style={{width:250}}  value={this.state.inputvalue2} 
            onChange={(e)=>{
              {/* console.log(e.target.value) */}
            this.setState({inputvalue2:e.target.value})
          }}/></div >
        {/* <div  style={{ display:'flex',width:420,height:64,padding:'0 12px'}}><div style={{width:42,height:32,fontSize:14,lineHeight:'32px'}}>时间:</div>  <RangePicker 
        onChange={(dates)=>{
          console.log(dates)
        }}
        /></div > */}
        <div  style={{ display:'flex',width:240,height:64,padding:'0 12px'}}>
        <div style={{width:70,height:32,fontSize:14,lineHeight:'32px'}}>订单状态:</div > 
        <Select
            showSearch
            style={{ width: 100}}
            placeholder="全部"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            value={this.state.inputvalue4} 
            onChange={(value)=>{
             
            this.setState({inputvalue4:value})
          }}
          >
            <Option value="全部">全部</Option>
            <Option value="未发货">未发货</Option>
            <Option value="配送中">配送中</Option>
            <Option value="已完成">已完成</Option>
            <Option value="退款中">退款中</Option>
          </Select></div >
        <div style={{ display:'flex',width:240,height:32,padding:'0 12px',marginLeft:100}}><Button type="primary" style={{ width:64,height:32,padding:'0 15px'}} onClick={this.orderSubmit.bind(this,inputvalue1,inputvalue2,inputvalue3,inputvalue4)}>搜索</Button>
                                       <div style={{padding:'0 10px'}}>|</div> <Button type="dashed" style={{width:64,height:32,padding:'0 15px'}} 
                                       onClick={()=>{
                                         this.setState({inputvalue1:'',inputvalue2:'',inputvalue4:'全部',
                                         })}}>重置</Button></div >    
        </div>
          </div>

        </div>
       
     
        <Table 
      columns={columns}
      expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
      dataSource={this.state.list}
      pagination={false}
    />
     <Pagination simple defaultCurrent={1} total={this.state.count} pageSize={5}
     onChange={(page,pageSize)=>{
      //pages要改变的页码数
      this.refreshData(page)
      console.log(page,pageSize)
    }}/>
      </div>
    )
  }
}


export default Orders