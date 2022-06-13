import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
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
        <a href="https://mail.google.com/" target="_blank" rel="noreferrer">
          Gmail
        </a>
        <Link to="/images">Imágenes</Link>
        <IconButton>
          <AppsIcon fontSize="medium" />
        </IconButton>

        <IconButton>
          <Avatar fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
