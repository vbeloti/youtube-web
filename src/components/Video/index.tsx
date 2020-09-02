import React from 'react';

import './styles.css';

interface IVideo {
  image?: string;
  title?: string;
  channel?: string;
}

const Video: React.FC<IVideo> = ({image, title, channel}) => {
  return (
    <div>
      <h4>Video Title</h4>
    </div>
  );
}

export default Video;
