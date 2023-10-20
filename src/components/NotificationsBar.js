import style from "./NotificationsBar.module.scss";
import { Notification } from "./index";
import { useSelector } from "react-redux";
function NotificationsBar() {
  const notificationList = useSelector((state) => state.notification);
  const showNotifications = notificationList.slice(0, 3);
  return (
    <div className={style.notificationsBar}>
      <ul className={style.notificationsBarList}>
        {showNotifications.map((currentNotification) => (
          <li
            className={style.notificationsBarListNoti}
            key={currentNotification.text}
          >
            <Notification notification={currentNotification}></Notification>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationsBar;
