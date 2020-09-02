import React from 'react';

import './styles.css';
import SideBarRow from '../SideBarRow';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h1>Sidebar</h1>

      <SideBarRow selected icon="home" title="Início" />
      <SideBarRow icon="trending" title="Em Alta" />
      <SideBarRow icon="subscribers" title="Incrições" />
      <hr/>
      <SideBarRow icon="library" title="Biblioteca" />
      <SideBarRow icon="history" title="Histórico" />
      <SideBarRow icon="ondemand" title="Seus vídeos" />
      <SideBarRow icon="watchlater" title="Assistir mais tarde" />
      <SideBarRow icon="thumbup" title="Vídeos marcadas com gostei" />
      <SideBarRow icon="more" title="Mostrar mais" />
      <hr/>
    </div>
  );
}

export default Sidebar;
