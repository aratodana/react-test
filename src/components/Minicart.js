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
  const sumPrice = cart.reduce((sum, item) => sum + item.price, 0);
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
        <table>
          <thead>
          <tr>
            <th>
              { t('components.mini_cart.table.header.items') }
            </th>
            <th>
              { t('components.mini_cart.table.header.unit') }
            </th>
            <th>
              { t('components.mini_cart.table.header.price') }
            </th>
          </tr>
          </thead>
          <tbody>
          { cart.map(item => {
            return (
                <tr>
                  <td>
                    { item.title }
                  </td>
                  <td>
                    1
                  </td>
                  <td>
                    { item.price }
                  </td>
                </tr>)
          })}
          </tbody>
          <tfoot>
          <tr>
            <td>
              { t('components.mini_cart.table.footer.total') }
            </td>
            <td></td>
            <td>
              { sumPrice }
            </td>
          </tr>
          </tfoot>
        </table>
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
