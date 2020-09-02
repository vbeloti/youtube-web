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
        image="https://yt3.ggpht.com/a/AATXAJy51Fbo8T1ZRR6b6rAiTpFscFITaC-tiLzypH3IJg=s100-c-k-c0xffffffff-no-rj-mo"
        channel="NoCopyrightSounds"
        verified
        subs="27,5 mi"
        noOfVideos={806}
        description="NoCopyrightSounds is a copyright free / stream safe record label, providing free to use music to the content creator community."
      />
      <hr />

      <VideoRow
        subs="27,5 mi"
        description="NCS: Music Without Limitations"
        title="Jim Yosef - Fall With Me [NCS Release]"
        views="1.6"
        timestamp="há 1 mês atrás"
        channel="NoCopyrightSounds"
        image="http://i3.ytimg.com/vi/BG_W8Z74nG8/maxresdefault.jpg"
      />

      <VideoRow
        subs="80,9 mil"
        description="asakskaskak"
        title="NCS 24/7 Gaming Music Livestream"
        views="1 Mi"
        timestamp="há 1 mês atrás"
        channel="NCS Arcade"
        image="http://i3.ytimg.com/vi/-Mypt378fkc/maxresdefault.jpg"
      />

      <VideoRow
        subs="21,9 mil"
        description="asakskaskak"
        title="Mangoo - Happi (ft. bby ivy) [NCS Lyrics]"
        views="14 mil"
        timestamp="há 1 mês atrás"
        channel="NCS Lyrics"
        image="http://i3.ytimg.com/vi/2Tf_kkF4Y-o/maxresdefault.jpg"
      />

      <VideoRow
        subs="27,5 mi"
        description="NCS: Music Without Limitations"
        title="Brook Xiao - Fire (ft. Rachel Horter) [NCS Release]"
        views="1.6"
        timestamp="há 3 mês atrás"
        channel="NoCopyrightSounds"
        image="http://i3.ytimg.com/vi/2W3Y9KMgNw0/maxresdefault.jpg"
      />
    </div>
  );
};

export default SearchPage;
