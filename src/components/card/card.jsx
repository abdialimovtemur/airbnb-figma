import style from "./style.module.scss";

export const Card = ({ data }) => {
    return (
        <div className={style.nav}>  {/* Karta konteyneriga klass qo'shildi */}
            {data.map(item => (
                <div key={item.id} className={style.navItem}>
                    <img src={item.img} alt={item.title || 'Product image'} />
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                    <p>{item.price}$</p>
                    <p>{item.date}</p>
                    <p>Rating: {item.rate}</p>
                </div>
            ))}
        </div>
    );
};
