import { Avatar } from "@mui/material";
import "./InfoUser.css";

import { auth } from "../firebase";

import { useDispatch } from "react-redux";
import { setUser } from "../features/userSlice";

const InfoUser = ({ user, setOpenInfoUser }) => {
  const { displayName, email, photoURL } = user;
  const dispatch = useDispatch();

  const sigout = () => {
    auth.signOut().then((_) => {
      dispatch(setUser({}));
      setOpenInfoUser(false);
    });
  };

  return (
    <div className="infoUser">
      <div className="infoUser__header">
        <Avatar className="infoUser__avatar" src={photoURL} />

        <div className="infoUser_datos">
          <p className="infoUser__name"> {displayName} </p>
          <p> {email} </p>
        </div>
      </div>

      <div className="infoUser__logout">
        <button className="infoUser__btnLogout" onClick={sigout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default InfoUser;
