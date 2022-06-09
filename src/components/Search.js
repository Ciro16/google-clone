import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { IconButton } from "@mui/material";
import { GoogleInput } from "./Googleinput";

const Search = () => {
  return (
    <>
      <form className="search">
        <GoogleInput>
          <IconButton>
            <SearchIcon className="search__inputIcon" />
          </IconButton>
          <input type="text" />
          <MicIcon />
        </GoogleInput>
      </form>
    </>
  );
};

export default Search;
