import style from "./Header.module.scss";
import Minicart from "./Minicart";
import { useTranslation } from "react-i18next";
function Header() {
  const { t } = useTranslation();
  return (
    <header className={style.header}>
      <div className={style.headerText}>{t("header.title")}</div>
      <div className={style.headerMinicart}>
        <Minicart></Minicart>
      </div>
    </header>
  );
}

export default Header;
