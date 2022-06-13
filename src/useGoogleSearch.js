import { useEffect, useState } from "react";
import { API_GOOGLE_KEY } from "./keys";

const CONTEXT_KEY = "012f3d20becee639c";

const useGoogleSearch = (searchString) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = `https://www.googleapis.com/customsearch/v1?key=${API_GOOGLE_KEY}&cx=${CONTEXT_KEY}&q=${searchString}`;

    fetch(url)
      .then((res) => res.json())
      .then((dataSearch) => setData(dataSearch));
  }, [searchString]);

  return { data };
};

export { useGoogleSearch };
