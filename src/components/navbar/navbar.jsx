import style from "./style.module.scss";

export const Navbar = ({ data }) => {
    return (
        <div className={style.nav}>
            {data.map(item => (
                <div key={item.title} className={style.navItem}>
                    <img src={item.img} alt={item.title} />
                    <h1>{item.title}</h1>
                </div>
            ))}
        </div>
    );
};
