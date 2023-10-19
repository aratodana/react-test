import style from "./Tooltip.module.scss";
function Tooltip (props) {
    const position = props.position || 'bottom';
  return (
      <div className={style.tooltip}>
          <div className={style.tooltipTrigger}>
              { props.trigger }
          </div>
          <div className={[style.tooltipContent, style[`tooltipContent${position}`]].join(' ')}>
            { props.content }
          </div>
      </div>
  );
}

export default Tooltip;
