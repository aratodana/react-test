import style from "./Minicart.module.scss";
import { Button } from "./index.js";
import { IconCart } from "./icons/index";
import { useTranslation } from "react-i18next";
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import price from "../util/price";
function Minicart() {
  // region init
  const { t } = useTranslation();
  // endregion init

  // region state
  const cart = useSelector((state) => state.cart);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const sumPrice = {
    value: cart.reduce((sum, item) => sum + item.price.value, 0),
    currency: cart[0] ? cart[0].price.currency : 'GBP'
  };
  // endregion state

  // region effect
  const [isOpen, setIsOpen] = useState(false);

  const toggleTooltip = () => {
    setIsOpen(!isOpen && !!itemCount);
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
        { t('components.mini_cart.item_count', { count: itemCount }) }
      </h4>
      <div className={style.minicartTooltipContent}>
        <table className={style.minicartTooltipContentTable}>
          <thead>
          <tr>
            <th className={style.minicartTooltipContentTableItems}>
              { t('components.mini_cart.table.header.items') }
            </th>
            <th className={style.minicartTooltipContentTableUnit}>
              { t('components.mini_cart.table.header.unit') }
            </th>
            <th className={style.minicartTooltipContentTablePrice}>
              { t('components.mini_cart.table.header.price') }
            </th>
          </tr>
          </thead>
          <tbody>
          { cart.map(item => {
            return (
                <tr key={item.id} className={style.minicartTooltipContentTableRow}>
                  <td className={style.minicartTooltipContentTableItems}>
                    { item.title }
                  </td>
                  <td className={style.minicartTooltipContentTableUnit}>
                    { item.quantity}
                  </td>
                  <td className={style.minicartTooltipContentTablePrice}>
                    { price(item.price) }
                  </td>
                </tr>)
          })}
          </tbody>
          <tfoot className={style.minicartTooltipContentTableFoot}>
            <tr>
              <td className={style.minicartTooltipContentTableItems}>
                { t('components.mini_cart.table.footer.total') }
              </td>
              <td></td>
              <td className={style.minicartTooltipContentTablePrice}>
                { price(sumPrice) }
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
