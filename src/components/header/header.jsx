import style from "./style.module.scss"
import logo from "../../assets/logo.svg"
import search from "../../assets/searchBtn.svg"
import browser from '../../assets/browser.svg'
import hamburger from "../../assets/hamburger.svg"
import accaunt from "../../assets/accaunt.svg"
import { Navbar } from "../navbar/navbar"
import { Search } from "../search/search"


export const Header = ({data}) => {    
    return (
        <div className="container">
            <header className={style.header}>

                <div><img src={logo} alt="logo" /></div>

                <div className={style.add}>
                    <a href="#">Anywhere</a>
                    <a href="#">Any week</a>
                    <div>
                        <input type="text" placeholder="Add guests" />
                        <img src={search} alt="search" />
                    </div>
                </div>

                <div className={style.header_right}>
                    <p>Airbnb your home</p>
                    <img src={browser} alt="browser" />

                    <div>
                        <img src={hamburger} className={style.hamburger} alt="hamburger" />
                        <img src={accaunt} className={style.accaunt} alt="accaunt" />
                    </div>
                </div>
            </header >

            <Navbar data={data.header.navbar}/>
            <Search/>
        </div>
    )
}

