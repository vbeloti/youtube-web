import React from 'react';

import './styles.css';
import SideBarRow from '../SideBarRow';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h1>Sidebar</h1>

      <SideBarRow />
    </div>
  );
}

export default Sidebar;
