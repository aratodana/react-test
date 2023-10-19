import style from "./Minicart.module.scss";
import { Button } from "./index.js";
import { IconCart } from "./icons/index";
import { useTranslation } from "react-i18next";
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
function Minicart() {
  // region init
  const { t } = useTranslation();
  // endregion init

  // region state
  const cart = useSelector((state) => state.cart);
  const itemCount = cart.length;
  // endregion state

  // region effect
  const [isOpen, setIsOpen] = useState(false);

  const toggleTooltip = () => {
    setIsOpen(!isOpen);
  };
  // endregion effect
  return <div className={style.minicart}>
    <button onClick={toggleTooltip} className={style.minicartButton}>
      <div className={style.minicartButtonIcon}>
        { itemCount > 0 &&
            <div className={style.minicartButtonIconCounter}>
              { itemCount }
            </div> }
        <IconCart ></IconCart>
      </div>
      <span className={style.minicartButtonText}>
          { t('components.mini_cart.title') }
    </span>
    </button>
    { isOpen && <div className={style.minicartTooltip}>
      <h4 className={style.minicartTooltipHeader}>
        { t('components.mini_cart.item_count', itemCount) }
      </h4>
      <div className={style.minicartTooltipContent}>
        { JSON.stringify(cart) }
      </div>
      <div className={style.minicartTooltipFooter}>
        <Button>
          { t('components.mini_cart.go_to_checkout') }
        </Button>
      </div>
    </div>}
  </div>;
}

export default Minicart;
