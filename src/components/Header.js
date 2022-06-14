import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";

import "./Header.css";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

import { useState } from "react";
import InfoUser from "./InfoUser";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [openInfoUser, setOpenInfoUser] = useState(false);

  const handelClick = () => {
    if (Object.keys(user).length === 0) {
      // Si no está logueado, abrimos login
      dispatch(login());
    } else {
      setOpenInfoUser(!openInfoUser);
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
          <Avatar fontSize="large" src={user?.photoURL} />
        </IconButton>

        {openInfoUser && (
          <InfoUser user={user} setOpenInfoUser={setOpenInfoUser} />
        )}
      </div>
    </div>
  );
};

export default Header;
