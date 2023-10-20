import style from "./Button.module.scss";
function Button(props) {
  const handleButtonClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  }
  return (
    <button className={style.button} onClick={handleButtonClick} aria-label={props.label || props.children}>
        { props.children }
    </button>
  );
}

export default Button;
