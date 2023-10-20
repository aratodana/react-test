import style from "./Tooltip.module.scss";
import { useRef, useState } from "react";

const positionsX = {
  RIGHT: "Right",
  LEFT: "Left",
};
const positionsY = {
  TOP: "Top",
  BOTTOM: "Bottom",
};
function Tooltip(props) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);

  const setTooltip = (payload) => {
    setIsOpen(payload);
  };

  const getPosition = () => {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (isOpen) {
      const x = rect.x;
      const y = rect.y;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const directionX = x > vw * 0.7 ? positionsX.LEFT : positionsX.RIGHT;
      const directionY = y > vh * 0.7 ? positionsY.TOP : positionsY.BOTTOM;
      // console.log(x, y, directionX, directionY);
      return {
        X: directionX,
        Y: directionY,
      };
    }
  };

  const positionClass = getPosition();

  return (
    <div className={style.tooltip}>
      <button
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        onFocus={() => setTooltip(true)}
        onBlur={() => setTooltip(false)}
        ref={triggerRef}
        className={style.tooltipTrigger}
        aria-expanded={isOpen.toString()}
        aria-controls="tooltipContent"
      >
        {props.trigger}
      </button>
      {isOpen && (
        <div
          id="tooltipContent"
          className={[
            style.tooltipContent,
            style[`tooltipContent${positionClass.X}`],
            style[`tooltipContent${positionClass.Y}`],
          ].join(" ")}
        >
          {`tooltipContent${positionClass.Y}`}
          {props.content}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
