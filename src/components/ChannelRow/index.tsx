import React from "react";

import "./styles.css";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

interface IChannelRow {
  image: string;
  channel: string;
  verified?: boolean;
  subs: string;
  noOfVideos: number;
  description: string;
}

const ChannelRow: React.FC<IChannelRow> = ({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) => {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" src={image} alt={channel} />
      <div className="channelRow__text">
        <div className="channelRow__channelName">
          <h4>
            {channel}
          </h4>
          {verified && <VerifiedIcon className="channelRow__verified" />}
        </div>
        <p>
          {subs} de inscritos • {noOfVideos} vídeos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
