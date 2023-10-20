import style from "./NotificationsBar.module.scss";
import { Spring, Notification } from "./index";
import { useSelector } from "react-redux";
function NotificationsBar() {
    const notificationList = useSelector((state) => state.notification);
    const showNotifications = notificationList.slice(0, 3);
  return (
    <div className={style.notificationsBar}>
        <Spring>
            <ul className={style.notificationsBarList}>
                { showNotifications.map(currentNotification =>
                    <li className={style.notificationsBarListNoti} key={currentNotification.text}>
                        <Notification notification={currentNotification}></Notification>
                    </li>
                )}
            </ul>
        </Spring>
    </div>
  );
}

export default NotificationsBar;
