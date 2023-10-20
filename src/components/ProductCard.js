import style from "./ProductCard.module.scss";
import { Button, Tooltip, ProductInformations } from "./index";
import { IconTooltip, IconCircleCheck } from "./icons/index";
import { useTranslation } from "react-i18next";
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { useState } from 'react';
import price from '../util/price';

function ProductCard (props) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [showAddedToCart, setShowAddedToCart] = useState(false);

    const handleAddToCart = event => {
        const product = props.product;
        dispatch(addToCart(product));
        setShowAddedToCart(true);
        setTimeout(() => {
            setShowAddedToCart(false);
        }, 2000);
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
          { price(props.product.price) }
      </div>
        <Button onClick={handleAddToCart}>
            { !showAddedToCart ? t('components.product_card.add_to_card') :             <div className={style.productCardIcon}>
                <IconCircleCheck></IconCircleCheck>
            </div> }
        </Button>
    </div>
  );
}

export default ProductCard;
