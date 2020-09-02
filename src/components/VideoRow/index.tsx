import React from "react";

import "./styles.css";

interface IVideoRow {
  image?: string;
  title?: string;
  channel?: string;
  timestamp?: string;
  views?: string;
  subs: string;
  description: string;
}

const VideoRow: React.FC<IVideoRow> = ({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) => {
  return (
    <div className="videoRow">
      <img src={image} alt={title} />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} • {views} de visualizações • {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
