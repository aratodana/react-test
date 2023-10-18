import style from './Header.module.scss';
import Minicart from "./Minicart";
function Header () {
  return (
      <div className={style.header}>
          <div className={style.headerText}>
              header
          </div>
          <Minicart></Minicart>
      </div>
  );
}

export default Header;
