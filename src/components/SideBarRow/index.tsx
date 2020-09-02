import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


import "./styles.css";

interface ISideBarRow {
  icon?: string;
  title: string;
  selected?: boolean;
}

const SideBarRow: React.FC<ISideBarRow> = ({ selected, icon, title }) => {
  return (
    <div className={`sidebarRow ${selected && 'selected'}`} >
      {icon === "home" && <HomeIcon className="sidebarRow__icon" />}
      {icon === "trending" && <WhatshotIcon className="sidebarRow__icon" />}
      {icon === "subscribers" && <SubscriptionsIcon className="sidebarRow__icon" />}
      {icon === "library" && <VideoLibraryIcon className="sidebarRow__icon" />}
      {icon === "history" && <HistoryIcon className="sidebarRow__icon" />}
      {icon === "ondemand" && <OndemandVideoIcon className="sidebarRow__icon" />}
      {icon === "watchlater" && <WatchLaterIcon className="sidebarRow__icon" />}
      {icon === "thumbup" && <ThumbUpAltOutlinedIcon className="sidebarRow__icon" />}
      {icon === "more" && <ExpandMoreOutlinedIcon className="sidebarRow__icon" />}
      <h2 className="sidebarRow__title">{title}</h2>
    </div>
  );
};

export default SideBarRow;
