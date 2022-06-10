import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { IconButton } from "@mui/material";
import { GoogleInput } from "./GoogleInput";
import { GoogleButton } from "./GoogleButton";

import "./Search.css";

const Search = ({ hideButtons = false }) => {
  const [search, setSearch] = useState("");

  const handelChange = (e) => {
    setSearch(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
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
