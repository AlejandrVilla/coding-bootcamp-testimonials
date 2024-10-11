import { ReactComponent as BGSVG } from "../icon/pattern-bg.svg";
import "./image.scss";

function Image( { imageUrl, alt }){
    return (
        <div className="img-div">
            <BGSVG className="bgsvg"/>
            <img className="img" src={imageUrl} alt={alt}/>
        </div>
    );
}

export { Image };