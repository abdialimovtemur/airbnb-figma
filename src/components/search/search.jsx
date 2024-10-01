import style from "./style.module.scss"
import togle from "../../assets/Toggle.svg"

export const Search = () => {
    return (
        <div className={style.search}>
            <div className={style.searchChild}>
                <p>Display total price</p>
                <input type="text" placeholder="Includes all fees, before taxes"/>
                <img src={togle} alt="" />
            </div>
        </div>
    )
}