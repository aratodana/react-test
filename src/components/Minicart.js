import style from "./Header.module.scss";
import { IconCart } from "./icons/index";
function Minicart() {
  return <div className={style.minicart}>
    <IconCart ></IconCart>
    Minicart
  </div>;
}

export default Minicart;
