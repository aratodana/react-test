import style from "./Banner.module.scss";
function Banner(props) {
  return (
    <div className={style.banner}>
      <h1 className={style.bannerTitle}>
        { props.title }
      </h1>
    </div>
  );
}

export default Banner;
