import { useEffect, useState } from "react";
import filterfunc from "../helpers/filter";
let localCache = [];

const useGetImages = (filter = "") => {
  const [animes, setAnime] = useState([]);
  const [status, setStatus] = useState("unloaded");
  useEffect(() => {
    if (localCache.length === 0) {
      requestData();
    } else if (localCache.length > 0) {
      setAnime(localCache.filter(filterfunc(filter)));
      setStatus("loaded");
    }
    async function requestData() {
         const apiRep = await fetch(
           "https://api.jikan.moe/v4/anime"
         );
         const json = await apiRep.json();
         console.log(typeof json)
         setAnime(json.data.filter(filterfunc(filter)))
         localCache = json.data || [];
         setStatus("loaded");

    }
   
  }, [filter]);
  return [status, animes];
};

export default useGetImages;
