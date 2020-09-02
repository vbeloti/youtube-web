import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import YoutubeLogo from "../../assets/img/youtube.svg";
import AvatarImg from "../../assets/img/avatar.png";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

import "./styles.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img className="header__logo" src={YoutubeLogo} alt="YouTube Logo" />
        </Link>
      </div>

      <div className="header__input">
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          type="text"
          placeholder="Pesquisar"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar src={AvatarImg} alt="Avatar Photo" />
      </div>
    </div>
  );
};

export default Header;
