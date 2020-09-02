import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'

import './styles.css';
import ChannelRow from '../ChannelRow';

const SearchPage: React.FC = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTRO</h2>
      </div>
      <hr />
      <ChannelRow />
    </div>
  );
}

export default SearchPage;
