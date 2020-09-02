import React from 'react';

import './styles.css';
import Video from '../Video';

const RecommendedVideos: React.FC = () => {
  return (
    <div className="recommendedVideos" >
      <h2>Recomendados</h2>
      <div className="recommendedVideos__videos">
        <Video />
      </div>
    </div>
  );
}

export default RecommendedVideos;
