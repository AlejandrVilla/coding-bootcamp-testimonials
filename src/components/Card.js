import { Image } from "./Image";
import { ReactComponent as PrevSVG } from "../icon/icon-prev.svg";
import { ReactComponent as NextSVG } from "../icon/icon-next.svg";
import { ReactComponent as QuotesSVG } from "../icon/pattern-quotes.svg";
import "./card.scss";

function Card( props ){
    const { text } = props.item
    const { username } = props.item
    const { job } = props.item
    const { imageUrl } = props.item

    const prevIcon = <PrevSVG
                        className="prev-icon"
                        onClick={(e) => props.handlePrev(e)}
                    />
    const nextIcon = <NextSVG
                        className="next-icon"
                        onClick={(e) => props.handleNext(e)}
                    />

    return(
        <div className="card">
            <div className="image-content">
                <Image
                    imageUrl={imageUrl}
                    alt="perfil"
                />
                <div className="icons">
                    {prevIcon}
                    {nextIcon}
                </div>
            </div>
            <div className="user-content">
                <QuotesSVG className="quotes"/>
                <p className="text">{text}</p>
                <div className="user-info">
                    <p className="username">{username}</p>
                    <p className="job">{job}</p>
                </div>
            </div>
        </div>
    )
}

export { Card };