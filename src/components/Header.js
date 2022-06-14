import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";

import "./Header.css";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

import { login } from "../features/userSlice";
import { useState } from "react";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [openInfoUser, setOpenInfoUser] = useState(false);

  const handelClick = () => {
    if (Object.keys(user).length === 0) {
      // Si no está logueado, abrimos login
      dispatch(login(setOpenInfoUser));
    } else {
      setOpenInfoUser(true);
    }
  };

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

        <IconButton onClick={handelClick}>
          <Avatar fontSize="large" />
        </IconButton>

        {openInfoUser && <h1>Info user</h1>}
      </div>
    </div>
  );
};

export default Header;
