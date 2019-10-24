import React,{Component} from 'react'
import {Card,Table,Spin,Button,Popconfirm} from 'antd'
import './index.less'

const columns = [
    {
        title: 'id',
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
class Listmanage extends Component{
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
    

   this.$axios.get('/ggv1/admin/getAdvs')
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
export default Listmanage