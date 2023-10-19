import style from "./ProductCard.module.scss";
function productCard(props) {
  return (
    <div className={style.productCard}>
        <div className={style.productCardImageWrapper}>
            <img src={props.product.image} alt={props.product.title} className={style.productCardImage} />
        </div>
      <h3 className={style.productCardTitle}>
        {props.product.title}
      </h3>
      <div className={style.productCardPrice}>
          { props.product.price }
      </div>
    </div>
  );
}

export default productCard;
