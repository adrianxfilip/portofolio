import "../Styles/CV.scss"
import monocleFace from "../face-with-monocle_1f9d0.png"

export default function CV(){
    return (
        <div className="CV-wrapper">
            <div>
            <h2>Read my résumé for more in depth information.</h2>
            <img src={monocleFace} />
            </div>
            <i class="fi fi-rs-book-spells"></i>
        </div>
    )
}