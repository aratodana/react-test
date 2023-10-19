import style from "./Minicart.module.scss";
import { IconCart } from "./icons/index";
import { useTranslation } from "react-i18next";
function Minicart() {
  const { t } = useTranslation();
  const itemCount = 2; // TODO: get item count from cart context
  return <button className={style.minicart}>
    <div className={style.minicartIcon}>
      { itemCount > 0 &&
          <div className={style.minicartIconCounter}>
            { itemCount }
          </div> }
      <IconCart ></IconCart>
    </div>
    <span className={style.minicartText}>
          { t('components.miniCart.title') }
    </span>
  </button>;
}

export default Minicart;
