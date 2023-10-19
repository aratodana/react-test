import style from "./Minicart.module.scss";
import { Button } from "./index.js";
import { IconCart } from "./icons/index";
import { useTranslation } from "react-i18next";
import React, { useState } from 'react';
function Minicart() {
  // region init
  const { t } = useTranslation();
  // endregion init

  // region state
  const itemCount = 2; // TODO: get item count from cart context
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
        You have 2 items in your cart.
      </h4>
      <div className={style.minicartTooltipContent}>
        { t('components.mini_cart.item_count', 2) }
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
