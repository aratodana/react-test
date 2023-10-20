import style from "./Spring.module.scss";
function Spring(props) {
  return (
    <div className={style.springWrapper}>
      <div className={style.springContent}>{props.children}</div>
    </div>
  );
}

export default Spring;
