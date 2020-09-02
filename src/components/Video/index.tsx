import React from "react";

import "./styles.css";
import { Avatar } from "@material-ui/core";

interface IVideo {
  image?: string;
  title?: string;
  channel?: string;
  timestamp?: string;
  channelImage?: string;
  views?: string;
}

const Video: React.FC<IVideo> = ({
  image,
  title,
  channel,
  timestamp,
  channelImage,
  views
}) => {
  return (
    <div className="video">
      <img className="video__thumbnail" src={image} alt={title} />
      <div className="video__info">
        <Avatar className="video__avatar" alt={channel} src={channelImage} />
        <div className="video__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
