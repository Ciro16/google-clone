import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";

import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="home__header">
      <div className="home__headerLeft">
        <Link to="/about">Sobre Google</Link>
        <Link to="/store">Tienda</Link>
      </div>

      <div className="home__headerRight">
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Imágenes</Link>
        <IconButton>
          <AppsIcon fontSize="medium" />
        </IconButton>

        <Avatar fontSize="large" />
      </div>
    </div>
  );
};

export default Header;
