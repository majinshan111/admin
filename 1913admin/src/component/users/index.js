import React,{Component}from 'react';
import Panel from './panel'
import PanelList from './List'

class Users extends Component {

  render() { 
    
    return (
      <div className='login-box'>
          <Panel></Panel>
          <PanelList></PanelList>
      </div>
    );
  }
}


export default Users