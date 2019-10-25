import React,{Component,Frangment} from 'react'
// import './List'
import OperateMsg from './operateMsg'
import OperatePas from './operatePas'
import {Card,Table} from 'antd'
const { Column, ColumnGroup } = Table;

class  Panel_list extends Component{
  constructor(){
    super()
    this.state={
      list:[ {
        id:'00001',
        account:'1gre_yu@163.com',
        password:'879',
        nickname:'master',
        number:'15542564562',
        sex:'男',
  
      },
     
      {
        id:'00002',
        account:'2gre_yu@qq.com',
        password:'579',
        nickname:'Jane',
        number:'15738976872',
        sex:'女',
  
      },
      {
        id:'00003',
        account:'3gre_yu@qq.com',
        password:'379',
        nickname:'Tom',
        number:'15738976872',
        sex:'男',
  
      },
       {
        id:'00004',
        account:'4gre_yu@163.com',
        password:'6669',
        nickname:'lan',
        number:'15542564562',
        sex:'男',
  
      },
     
      {
        id:'00005',
        account:'5gre_yu@qq.com',
        password:'gsgsgs',
        nickname:'nemo',
        number:'15738976872',
        sex:'女',
  
      },
      {
        id:'00006',
        account:'6gre_yu@qq.com',
        password:'379',
        nickname:'adesn',
        number:'15738976872',
        sex:'男',
  
      },
      ]
    }

  }
  // getInitialState(){
  //   return {
      
  //   }
  // }
  updateData=(a)=>{
    // console.log(a[0])
    // console.log(this.getInitialState().list)
     this.state.list.map((item)=>{
      console.log(item)
      if(item.account===a[0].account){
        console.log(item.id,'1111')
        item.id=a[0].id
        item.number=a[0].number
        item.nickname=a[0].nickname
        item.password=a[0].password
      }
    })
    // console.log(this.state.list)
    let list1=this.state.list
    this.setState({list:list1})
  }
   render(){
    let list =this.state.list
    // console.log('hhhhhh',list)

    return(
      <div className='List'>
          <Card>
          <Table dataSource={list}>
          
              <Column title="id" dataIndex="id" key="id" />
              <Column title="账号" dataIndex="account" key="account" />
              <Column title="密码" dataIndex="password" key="password" />
              <Column title="昵称" dataIndex="nickname" key="nickname" />
              <Column title="手机号码" dataIndex="number" key="number" />
              <Column title="性别" dataIndex="sex" key="sex" />
              <Column title="操作" dataIndex="operate" key="operate" 
                render={(text, record) =>{
                    return (
                    <span>
                      <OperateMsg updateData={this.updateData}>{record}</OperateMsg>
                      <OperatePas updateData={this.updateData}>{record}</OperatePas>
                    </span>
                  )}
                }
              />
          
            
          </Table>
          </Card>
      </div>
  )

   }
   componentDidMount(){
 
   
  
  }

}
export default Panel_list