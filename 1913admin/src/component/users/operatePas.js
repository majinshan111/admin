import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import './operate.less'
class LocalizedModal extends Component {
  constructor(props){
    super(props);
    this.state = { 
      visible: false,
      id:props.children.id,
      account:props.children.account,
      password:props.children.password,
      nickname: props.children.nickname,
      number: props.children.number,
    };
  }
  

  showModal = (e) => {
    console.log(1)
    console.log()
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };
  hehe = () => {
    this.setState({
      visible: false,
    });
    
    
    let list=[{id:this.state.id,account:this.state.account,password:this.state.password,nickname:this.state.nickname,number:this.state.number}]
    this.props.updateData(list)
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
        <Button className='changePas' type="danger" onClick={this.showModal}>
          修改密码
        </Button>
        <Modal
          title="修改用户信息"
          visible={this.state.visible}
          onOk={this.hehe}
          onCancel={this.hideModal}
          okText="修改"
          cancelText="取消"
        >
          <p>id</p>
          <input type='text' value={id} onChange={(e)=>{
          
          this.setState({id:e.target.value})
        }}></input>
          <p>*密码</p>
          <input type='text' value={password} onChange={(e)=>{
          this.setState({password:e.target.value})
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
