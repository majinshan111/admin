import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import './operate.less'
class LocalizedModal extends Component {
  constructor(props){
    super(props);
    // console.log(this.props,'LLLLLLLLLLLLLLLLL')
    this.state = { 
      visible: false,
      account:props.children.account,
      id: props.children.id,
      nickname: props.children.nickname,
      number: props.children.number,
      password:props.children.password,
      sex:props.children.sex,
      newlist:[]
    };
    // console.log(this.props)
  }
  

  showModal = (e) => {
    // console.log(1)
    // console.log()
    // console.log(this.props.children,'ssssssssssssssss')
    this.setState({
      visible: true,
    });
  };

  okModal = () => {
    this.setState({
      visible: false,
    });
    // console.log(a)
    // console.log(this.props,'ok框')
    
    let list=[{id:this.state.id,account:this.state.account,nickname:this.state.nickname,number:this.state.number}]
    this.props.updateData(list)
  };
  
  hideModal = () => {
    this.setState({
      visible: false,
    });

  };

  render() {
    /**
     * account: "gre_yu@163.com"
        id: "01"
        nickname: "lj"
        number: 15542564562
        password: 379
        sex: 1
     */
    // console.log(this)
    // const {account,id,nickname,number,password,sex} = this.props.children
    const {account,id,nickname,number,password,sex} = this.state
  //  let arr=[]
  //   this.props.list.map((item,index)=>{
  //   const {account,id,nickname} = item
  //    this.state.id.push(id); 
  //    this.state.account.push(account);
  //    this.state.nickname.push(nickname);
  //   })

    return (
      <span>
        <Button className='changeMsg' type="primary" onClick={this.showModal.bind(this,this.props)}>
          修改信息
        </Button>
        <Modal
          title="修改用户信息"
          visible={this.state.visible}
          onOk={this.okModal}
          onCancel={this.hideModal}
          // afterClose={this.hehe}
          okText="修改"
          cancelText="取消"
        >
          <p>id</p>
          <input type='text' value={id} onChange={(e)=>{
          
            this.setState({id:e.target.value})
          }}></input>
          <p>*手机号</p>
          <input type='text' value={number} onChange={(e)=>{
            
            this.state.newlist.push({number:e.target.value})
            this.setState({number:e.target.value})
          }}></input>
          <p>*用户昵称</p>
          <input type='text' value={nickname} onChange={(e)=>{
            this.state.newlist.push({nickname:e.target.value})
            this.setState({nickname:e.target.value})
          }}></input>
        </Modal>
      </span>
    );
  }
}

function confirm() {
  Modal.confirm({
    title: 'Confirm',
    content: 'Bla bla ...',
    okText: '修改',
    cancelText: '取消',
  });
}

export default LocalizedModal
