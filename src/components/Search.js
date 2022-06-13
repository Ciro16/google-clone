import { useState } from "react";
import "./Search.css";

import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { IconButton } from "@mui/material";
import { GoogleInput } from "./GoogleInput";
import { GoogleButton } from "./GoogleButton";

import { setSearchString } from "../features/searchSlice";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

const Search = ({ hideButtons = false, searchValue = "" }) => {
  const [search, setSearch] = useState(searchValue);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelChange = (e) => {
    setSearch(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    dispatch(setSearchString(search));
    navigate("/search");
  };

  return (
    <form
      className={`search ${hideButtons && "search__down"}`}
      onSubmit={handelSubmit}
    >
      <GoogleInput>
        <IconButton>
          <SearchIcon className="search__inputIcon" />
        </IconButton>
        <input type="text" onChange={handelChange} value={search} />
        <MicIcon />
      </GoogleInput>

      <div className={`search_buttons ${hideButtons && "search__hideButtons"}`}>
        <GoogleButton type="submit">Buscar con Google</GoogleButton>
        <GoogleButton>Voy a tener suerte</GoogleButton>
      </div>
    </form>
  );
};

export default Search;
