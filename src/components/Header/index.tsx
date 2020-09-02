import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import YoutubeLogo from "../../assets/img/youtube.svg";
import AvatarImg from "../../assets/img/avatar.png";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

import "./styles.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img className="header__logo" src={YoutubeLogo} alt="YouTube Logo" />
      </div>

      <div className="header__input">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__icons">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar src={AvatarImg} alt="Avatar Photo" />
      </div>
    </div>
  );
};

export default Header;
