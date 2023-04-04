import "../Card/styles.css";
import save from './save.svg';


const Card = ({name, price, discount, wight, description, picture}) => {
    const discount_price = Math.round(price - price/100*discount)
    return (
        <div className="card">
            <div className="card__sticky card__sticky__type__top-left">
                {!!discount &&(
                <span className="card__discount">-{discount}&nbsp;%</span>
                )}
            </div>
            <div className="card__sticky card__sticky__type__top-right">
            <button className="card__favorite">
					<img
						src={save}
						alt="Добавить в избаранное"
						className="card__favorite-icon"
					/>
				</button>
            </div>
            <a href="/product" className="card__link">
                <img src={picture} alt={description} className="card__picture" />
                <div className="card__desc">
                    <span className={!!discount ? 'card__old-price' : 'card__price'}>{price}&nbsp;Р</span>
                    {!!discount && <span className="card__price card__price_type_discount">{discount_price}&nbsp;Р</span>}
                    <span className="card__wight">{wight}</span>
                    <p className="card__name">{name}</p>
                </div>
            </a>
            <a href="#" className="card__cart btn btn__type__primary">В корзину</a>
        </div>
    )
}

export default Card;