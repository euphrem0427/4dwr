import ImageBlock from "./ImageBlock";
import useGetImages from "../hooks/useGetImages";
import { Link } from "react-router-dom"
const Anime = ({searchValue}) => {
 const [status, animes] = useGetImages(searchValue)
  return (
    <div className="ListImageContainer">
      {status!== "loaded" && <div>Chargement....</div>}
      {status === "loaded" && animes.map((anime) => (
         
          <Link to={`/infos/${anime.title}`}>
            <ImageBlock key={anime.images.jpg.image_url} anime={anime} />
          </Link>
       
         
      ))}
    </div>
  );
};
export default Anime;