import React from 'react';
import './sidebarOption.css';

function SidebarOption({active, text, Icon}) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOptionActive'}`}>
        <Icon/>
        <h3>{text}</h3>
    </div>
  )
}

export default SidebarOption