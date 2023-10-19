import style from "./ProductCard.module.scss";
import { Button, Tooltip } from "./index";
import { IconTooltip } from "./icons/index";
function productCard(props) {
  return (
    <div className={style.productCard}>
        <div className={style.productCardHeader}>
            <div className={style.productCardHeaderIcon}>
                <Tooltip
                trigger={<IconTooltip className={style.productCardHeaderIcon}></IconTooltip>}
                content={<div>Tooltip</div>}
                >
                </Tooltip>
            </div>
        </div>
        <div className={style.productCardImageWrapper}>
            <img src={props.product.image} alt={props.product.title} className={style.productCardImage} />
        </div>
      <h3 className={style.productCardTitle}>
        {props.product.title}
      </h3>
      <div className={style.productCardPrice}>
          { props.product.price }
      </div>
        <Button>
            Add to cart
        </Button>
    </div>
  );
}

export default productCard;
