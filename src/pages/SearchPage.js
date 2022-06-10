import Search from "../components/Search";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AppsIcon from "@mui/icons-material/Apps";

import "./SearchPage.css";
import { Avatar } from "@mui/material";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            alt="Logo Search"
            className="searchPage__logo"
            src="https://1000marcas.net/wp-content/uploads/2020/02/logo-Google.png"
          />
        </Link>
        <div className="searchPage__headerCenter">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon fontSize="small" />
                <Link to="/all">All</Link>
              </div>

              <div className="searchPage__option">
                <DescriptionIcon fontSize="small" />
                <Link to="/news">News</Link>
              </div>

              <div className="searchPage__option">
                <ImageIcon fontSize="small" />
                <Link to="/images">Images</Link>
              </div>

              <div className="searchPage__option">
                <LocalOfferIcon fontSize="small" />
                <Link to="/shopping">Shopping</Link>
              </div>

              <div className="searchPage__option">
                <RoomIcon fontSize="small" />
                <Link to="/maps">Maps</Link>
              </div>

              <div className="searchPage__option">
                <MoreVertIcon fontSize="small" />
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>

              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="searchPage__headerRight">
          <AppsIcon fontSize="medium" />
          <Avatar className="headerRight__avatar" />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
