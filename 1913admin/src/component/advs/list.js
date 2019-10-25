import React,{Component} from 'react'
import {Card,Table,Spin,Button,Popconfirm} from 'antd'
import './index.less'
import UpdataAdvs from './Updataadvs/index'


class Listmanage extends Component{
  constructor(props){
    super(props)
    this.columns= [
      {
          title: '编号',
          dataIndex: 'category_second_id',
          key: 'category_second_id',
        },
      {
        title: '广告名称',
        dataIndex: 'category_name',
        key: 'category_name',
      },
      {
        title: '所属分类',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '图片',
        dataIndex: 'img',
        key: 'img',
        render(img){
          return(
           <img src={img} width='80' height='50' alt=''/> 
          )
        },
      },
      {
          title: '操作',
          key: 'action',
          render:(data)=>{
            return(
              <div>
                <Popconfirm
                 title='你确定要删除吗？'
                 onConfirm={()=>{
                   console.log('删除',data,this)
                   this.del(data._id)
                 }}>
                <Button size='small' type='danger'>删除</Button>
                </Popconfirm> 
                <span className='kb'>|</span> 
                 <Button size='small' type='primary' onClick={this.updata.bind(this,data)}>修改</Button>
              </div>
            )
          }
        }
    ]
    this.state={
      spinning:true,
      list:[],
      updataadvs:false,
      updateData:null
    }
  }
  del(_id){
    this.$axios.get(`/ggv1/admin/delAdvs?_id=${_id}`)
    .then((data)=>{
      console.log(data)
      this.refreshData()
    })
  }
  updata=(data)=>{
    this.setState({updataadvs:true,updateData:data})
    console.log(data)
  }

  componentDidMount(){
    this.refreshData()
  }
  refreshData=()=>{
    this.setState({spinning:true,updataadvs:false})
   this.$axios.get('/ggv1/admin/getAdvs')
    .then((data)=>{
           this.setState({spinning:false,list:data.data.list})
    })
    .catch(()=>{
      this.setState({spinning:false})
    })
  }

  
    render(){
      let {spinning,list,updataadvs,updateData}=this.state
        return(
            <div className='listmanage'>
         {/* 修改列表模态框 */}
         {!updataadvs|| <UpdataAdvs data={updateData} refresh={this.refreshData}></UpdataAdvs>}
              <Card>
              <Spin tip="Loading..." spinning={spinning}>
                  <Table scroll={{y:270,x:550}} dataSource={list} columns={this.columns} pagination={false}></Table>
              </Spin>
              </Card>
            </div>
        )
    }
}
export default Listmanage