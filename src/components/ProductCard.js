import style from "./ProductCard.module.scss";
import { Button, Tooltip, ProductInformations } from "./index";
import { IconTooltip } from "./icons/index";
import { useTranslation } from "react-i18next";
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

function ProductCard (props) {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const handleAddToCart = event => {
        const product = props.product;
        dispatch(addToCart(product));
    };
    return (
    <div className={style.productCard}>
        <div className={style.productCardHeader}>
            <div className={style.productCardHeaderIcon}>
                <Tooltip
                trigger={<IconTooltip className={style.productCardHeaderIcon}></IconTooltip>}
                content={<ProductInformations product={props.product}></ProductInformations>}
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
        <Button onClick={handleAddToCart}>
            { t('components.product_card.add_to_card') }
        </Button>
    </div>
  );
}

export default ProductCard;
