import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { IconButton } from "@mui/material";
import { GoogleInput } from "./GoogleInput";
import { GoogleButton } from "./GoogleButton";

import "./Search.css";

const Search = () => {
  return (
    <form className="search">
      <GoogleInput>
        <IconButton>
          <SearchIcon className="search__inputIcon" />
        </IconButton>
        <input type="text" />
        <MicIcon />
      </GoogleInput>

      <div className="search_buttons">
        <GoogleButton type="submit">Buscar con Google</GoogleButton>
        <GoogleButton>Voy a tener suerte</GoogleButton>
      </div>
    </form>
  );
};

export default Search;
