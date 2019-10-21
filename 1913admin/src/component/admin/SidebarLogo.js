import React from 'react';

import logo from '../assets/images/logo.png';
import './index.less'

const SidebarLogo = () => {
  return (
    <div className="sidebar-logo">
      <img src={logo} alt="..."/>
      <h2 className="sidebar-logo-content">肥猫超市</h2>
    </div>
  )
}

export default SidebarLogo
