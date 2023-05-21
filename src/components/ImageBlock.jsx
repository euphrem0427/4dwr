import { useState } from "react";
const ImageBlock = ({ anime }) => {
    const [isCode, setIsCode] = useState(false);
    return (
        <button className="imageWrapper" onClick={() => {setIsCode(!isCode);}}>
            <img src={anime.images.jpg.image_url} alt={anime.title}/>
            <div style={{ fontWeight: "350" }}>
                {isCode ? anime.title_japanese: anime.title}
            </div>
        </button>
    );
};

export default ImageBlock;