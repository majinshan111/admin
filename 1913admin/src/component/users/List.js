import React from 'react'
import './List'
import Operate from './operate'
import {Card,Table} from 'antd'

const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '账号',
      dataIndex: 'account',
      key: 'account',
    },
    {
      title: '密码',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: '昵称',
      dataIndex: 'nickname',
      key: 'nickname',
    },
    {
      title: '手机号码',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
      render(data){
          console.log(data)
          let arr=['未知','男','女']
          return(
              <span>{arr[data]}</span>
          )
      }
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
     render(){
        return(
               <div>
                    <Operate></Operate>
               </div>
        )
     }
    },
  ];
  const dataSource=[
      {id:'01',account:'gre_yu@163.com',password:379,nickname:'lj',number:15542564562,sex:0,},
      {id:'01',account:'gre_yu@163.com',password:379,nickname:'lj',number:15542564562,sex:1,},
      {id:'01',account:'gre_yu@163.com',password:379,nickname:'lj',number:15542564562,sex:2,}

  ]
function Panel_list(){
    return(
        <div className='List'>
            <Card>
            <Table dataSource={dataSource} columns={columns}>
           
            </Table>
            </Card>
        </div>
    )
}
export default Panel_list