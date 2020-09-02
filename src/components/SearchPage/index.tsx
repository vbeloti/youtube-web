import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

import "./styles.css";
import ChannelRow from "../ChannelRow";
import VideoRow from "../VideoRow";

const SearchPage: React.FC = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTRO</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJzTStezZowa-uxQoxa_O1K3I1aBp4liumTP5JMF8wU=s100-c-k-c0xffffffff-no-rj-mo"
        channel="Vinicius"
        verified
        subs="659K"
        noOfVideos={382}
        description="You can find qkoaks o lak saks as oak"
      />
      <hr />

      <VideoRow
        subs="659k"
        description="asakskaskak"
        title="Video TItulo abem  asok qw wqk qpokowqq qkw"
        views="2.3 Mi Views"
        timestamp="3 dias atras"
        channel="vINICIUS LINDAO"
        image="http://i3.ytimg.com/vi/2Tf_kkF4Y-o/maxresdefault.jpg"
      />

<VideoRow
        subs="659k"
        description="asakskaskak"
        title="Video TItulo abem  asok qw wqk qpokowqq qkw"
        views="2.3 Mi Views"
        timestamp="3 dias atras"
        channel="vINICIUS LINDAO"
        image="http://i3.ytimg.com/vi/2Tf_kkF4Y-o/maxresdefault.jpg"
      />

<VideoRow
        subs="659k"
        description="asakskaskak"
        title="Video TItulo abem  asok qw wqk qpokowqq qkw"
        views="2.3 Mi Views"
        timestamp="3 dias atras"
        channel="vINICIUS LINDAO"
        image="http://i3.ytimg.com/vi/2Tf_kkF4Y-o/maxresdefault.jpg"
      />
    </div>
  );
};

export default SearchPage;
