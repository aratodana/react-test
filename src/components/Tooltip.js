import style from "./Tooltip.module.scss";
import {useState} from "react";
function Tooltip (props) {
    const [isOpen, setIsOpen] = useState(false);

    const setTooltip = (payload) => {
        setIsOpen(payload);
    };
  return (
      <div className={style.tooltip}>
          <button
              onMouseEnter={() => setTooltip(true)}
              onMouseLeave={() => setTooltip(false)}
              onFocus={() => setTooltip(true)}
              onBlur={() => setTooltip(false)}
              className={style.tooltipTrigger}
              aria-expanded={isOpen.toString()}
              aria-controls="tooltipContent"
          >
              { props.trigger }
          </button>
          { isOpen &&
              <div id="tooltipContent" className={style.tooltipContent}>
                  { props.content }
              </div>
          }
      </div>
  );
}

export default Tooltip;
