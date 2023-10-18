import style from './Header.module.scss';
import Minicart from "./Minicart";
import { useTranslation } from 'react-i18next';
function Header () {
  const { t } = useTranslation();
  return (
      <div className={style.header}>
          <div className={style.headerText}>
              { t('header.title') }
          </div>
          <Minicart></Minicart>
      </div>
  );
}

export default Header;
