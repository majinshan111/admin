import React,{Component}from 'react';
import {Table,InputNumber,Input,DatePicker,Select,Button,} from 'antd';
const {  RangePicker } = DatePicker;
class Orders extends Component {

  render() { 
    const columns = [
      { title: 'id', dataIndex: 'orderId', key: 'orderId' },
      { title: '用户id', dataIndex: 'userId', key: 'useId' },
      { title: '总价', dataIndex: 'amount', key: 'amount' },
      { title: '订单状态', dataIndex: 'status', key: 'status' },
      { title: '下单时间', dataIndex: 'createTime', key: 'address' },
      { title: '备注', dataIndex: 'remarks', key: 'remarks' },
      
    ];
    
    const data = [
      {
        orderId: 100000078,
        userId: '10001',
        amount: 32,
        status: '未完成',
        createTime:'2019-10-22 14:15',
        remarks: '',
        description:['用户收获地址:河南省温县',
                     <br/>,
                     '商品:',
                     <br/>,
                     '编号:100006',    '名称:苹果',     '数量：1',
                     <br/>,
                     '编号:100007',     '名称:芒果',     '数量：1',
                    ]
      
        
      },
      {
        orderId: 100000078,
        userId: '10001',
        amount: 32,
        status: '未完成',
        createTime:'2019-10-22 14:15',
        remarks: '',
        description:['用户收获地址:河南省温县',
                     <br/>,
                     '商品:',
                     <br/>,
                     '编号:100006',    '名称:苹果',     '数量：1',
                     <br/>,
                     '编号:100007',     '名称:芒果',     '数量：1',
                    ]
      
        
      },
      {
        orderId: 100000078,
        userId: '10001',
        amount: 32,
        status: '未完成',
        createTime:'2019-10-22 14:15',
        remarks: '',
        description:['用户收获地址:河南省温县',
                     <br/>,
                     '商品:',
                     <br/>,
                     '编号:100006',    '名称:苹果',     '数量：1',
                     <br/>,
                     '编号:100007',     '名称:芒果',     '数量：1',
                    ]
      },
    ];
    const { Option } = Select;
    return(
      < div className='login-box' style={{width:1394,height:50}}>
        <div style={{ display:'flex'}}>
          <div style={{ display:'flex',width:240,height:64,padding:'0 12px'}}><div style={{width:25,height:32,fontSize:14,lineHeight:'32px'}}>id:</div><InputNumber min={1} max={10} defaultValue={3}  style={{ width: 200}}/></div >
        
        <div  style={{ display:'flex',width:300,height:64,padding:'0 12px'}} ><div style={{width:70,height:32,fontSize:14,lineHeight:'32px'}}>用户名称:</div > <Input style={{width:250}}/></div >
        <div  style={{ display:'flex',width:420,height:64,padding:'0 12px'}}><div style={{width:42,height:32,fontSize:14,lineHeight:'32px'}}>时间:</div>  <RangePicker/></div >
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
          >
            <Option value="全部">全部</Option>
            <Option value="代发货">代发货</Option>
            <Option value="配送中">配送中</Option>
            <Option value="已完成">已完成</Option>
            <Option value="退款中">退款中</Option>
          </Select></div >
        <div style={{ display:'flex',width:240,height:32,padding:'0 12px',marginLeft:100}}><Button type="primary" style={{ width:64,height:32,padding:'0 15px'}}>搜索</Button>
                                       <div style={{padding:'0 10px'}}>|</div> <Button type="dashed" style={{width:64,height:32,padding:'0 15px'}}>重置</Button></div >    
        </div>
     
        <Table
      columns={columns}
      expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
      dataSource={data}
    />
      </div>
    )
  }
}


export default Orders