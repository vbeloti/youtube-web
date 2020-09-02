import React from "react";

import "./styles.css";
import Video from "../Video";

const RecommendedVideos: React.FC = () => {
  return (
    <div className="recommendedVideos">
      <h2>Recomendados</h2>
      <div className="recommendedVideos__videos">
        <Video
          title="Chris Linton & Cadmium - Slow Down [NCS Release | Lyric Video]"
          views="1,1 mi"
          timestamp="há 2 semanas"
          channelImage="https://yt3.ggpht.com/a/AATXAJy51Fbo8T1ZRR6b6rAiTpFscFITaC-tiLzypH3IJg=s100-c-k-c0xffffffff-no-rj-mo"
          channel="NoCopyrightSounds"
          image="http://i3.ytimg.com/vi/iiMrs3vOm_w/maxresdefault.jpg"
        />

        <Video
          title="Besomorph x EMM - Afterlife [NCS Release]"
          views="727 mil"
          timestamp="há 1 semana"
          channelImage="https://yt3.ggpht.com/a/AATXAJy51Fbo8T1ZRR6b6rAiTpFscFITaC-tiLzypH3IJg=s100-c-k-c0xffffffff-no-rj-mo"
          channel="NoCopyrightSounds"
          image="http://i3.ytimg.com/vi/F3B6qKchtzo/hqdefault.jpg"
        />

        <Video
          title="Elektronomia - Breeze [NCS Release]"
          views="995 mil"
          timestamp="há 2 semana"
          channelImage="https://yt3.ggpht.com/a/AATXAJy51Fbo8T1ZRR6b6rAiTpFscFITaC-tiLzypH3IJg=s100-c-k-c0xffffffff-no-rj-mo"
          channel="NoCopyrightSounds"
          image="http://i3.ytimg.com/vi/abYP-NPLTbw/maxresdefault.jpg"
        />

        <Video
          title="N3WPORT - Power (feat. braev) [NCS Release]"
          views="68 mil"
          timestamp="há 2 semanas"
          channelImage="https://yt3.ggpht.com/a/AATXAJy51Fbo8T1ZRR6b6rAiTpFscFITaC-tiLzypH3IJg=s100-c-k-c0xffffffff-no-rj-mo"
          channel="NoCopyrightSounds"
          image="http://i3.ytimg.com/vi/h3lwmCGG6Mw/maxresdefault.jpg"
        />

        <Video
          title="James Mercy - Take You On (ft. PhiloSofie) [NCS Release]"
          views="973 mil"
          timestamp="há 3 semanas"
          channelImage="https://yt3.ggpht.com/a/AATXAJy51Fbo8T1ZRR6b6rAiTpFscFITaC-tiLzypH3IJg=s100-c-k-c0xffffffff-no-rj-mo"
          channel="NoCopyrightSounds"
          image="http://i3.ytimg.com/vi/rJxVgyMI-Pw/maxresdefault.jpg"
        />

        <Video
          title="Jone - Everything [NCS Release]"
          views="880 mil visualizações"
          timestamp="há 1 semana"
          channelImage="https://yt3.ggpht.com/a/AATXAJy51Fbo8T1ZRR6b6rAiTpFscFITaC-tiLzypH3IJg=s100-c-k-c0xffffffff-no-rj-mo"
          channel="NoCopyrightSounds"
          image="http://i3.ytimg.com/vi/_0YtVIMWrac/maxresdefault.jpg"
        />

        <Video
          title="Mangoo - Happi (ft. bby ivy) [NCS Release]"
          views="1,9 mi"
          timestamp="há 4 semanas"
          channelImage="https://yt3.ggpht.com/a/AATXAJy51Fbo8T1ZRR6b6rAiTpFscFITaC-tiLzypH3IJg=s100-c-k-c0xffffffff-no-rj-mo"
          channel="vINICIUS LINDAO"
          image="http://i3.ytimg.com/vi/gQjAEbWZEgU/maxresdefault.jpg"
        />
      </div>
    </div>
  );
};

export default RecommendedVideos;
