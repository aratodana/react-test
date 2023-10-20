import style from "./Notification.module.scss";
function Notifications(props) {
  return (
      <div className={style.notification} aria-live="assertive" aria-atomic="true">
          { props.notification.text }
      </div>
  );
}

export default Notifications;
