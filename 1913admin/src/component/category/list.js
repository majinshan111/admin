import React,{Component} from 'react'
import {Card,Table,Spin,Button,Popconfirm} from 'antd'
import './index.less'

const columns = [
    {
        title: 'id',
        dataIndex: '_id',
        key: '_id',
      },
    {
      title: '二级分类',
      dataIndex: 'name',
      key: 'name',
    },
    {
        title: '操作',
        key: 'action',
        render(data){
          return(
            <div>
              <Popconfirm
               title='你确定要删除吗？'
               onConfirm={()=>{
                 console.log('删除',data)
               }}>
              <Button size='small' type='danger'>删除</Button>
              </Popconfirm> 
              <span className='kb'>|</span> 
               <Button size='small' type='primary'>修改</Button>
            </div>
          )
        }
      }
  ];
class Listgoods extends Component{
  constructor(){
    super()
    this.state={
      spinning:true,
      list:[]
    }
  }
  componentDidMount(){
    this.refreshData()
  }
  refreshData(){
    

   this.$axios.get('/fm/admin/type/getType')
    .then((data)=>{
      // console.log(data)
      // console.log(data.data.list) 
           this.setState({spinning:false,list:data.data.list})
    })
    .catch(()=>{
      this.setState({spinning:false})
    })


  }
    render(){
      let {spinning,list}=this.state
        return(
            <div className='listmanage'>
              <Card>
              <Spin tip="Loading..." spinning={spinning}>
                  <Table scroll={{y:190,x:550}} dataSource={list} columns={columns} pagination={false}></Table>
              </Spin>
              </Card>
            </div>
        )
    }
}
export default Listgoods