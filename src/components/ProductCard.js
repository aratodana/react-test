import style from "./ProductCard.module.scss";
import { Button, Tooltip, ProductInformations } from "./index";
import { IconTooltip, IconCircleCheck } from "./icons/index";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { addNotification, takeNotification } from "../store/notificationSlice";
import { useState } from "react";
import price from "../util/price";

function ProductCard(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [showAddedToCart, setShowAddedToCart] = useState(false);

  const handleAddToCart = (event) => {
    if (showAddedToCart) {
      return;
    }
    const product = props.product;
    dispatch(addToCart(product));
    dispatch(
      addNotification({
        text: t("components.product_card.add_to_cart_notification", {
          itemName: product.title,
        }),
      }),
    );
    setShowAddedToCart(true);
    setTimeout(() => {
      setShowAddedToCart(false);
      dispatch(takeNotification());
    }, 2000);
  };
  return (
    <article className={style.productCard}>
      <div className={style.productCardImageWrapper}>
        <img
          src={props.product.image}
          alt={props.product.title}
          className={style.productCardImage}
        />
      </div>
      <h3 className={style.productCardTitle}>{props.product.title}</h3>
      <div className={style.productCardPrice}>{price(props.product.price)}</div>
      <div className={style.productCardHeader}>
        <div className={style.productCardHeaderIcon}>
          <Tooltip
            tabIndex="0"
            trigger={
              <IconTooltip
                className={style.productCardHeaderIcon}
              ></IconTooltip>
            }
            content={
              <ProductInformations
                product={props.product}
              ></ProductInformations>
            }
          ></Tooltip>
        </div>
      </div>
      <Button
        onClick={handleAddToCart}
        label={t("components.product_card.add_to_cart_label", {
          itemName: props.product.title,
        })}
      >
        {!showAddedToCart ? (
          t("components.product_card.add_to_cart")
        ) : (
          <div className={style.productCardIcon}>
            <IconCircleCheck></IconCircleCheck>
          </div>
        )}
      </Button>
    </article>
  );
}

export default ProductCard;
