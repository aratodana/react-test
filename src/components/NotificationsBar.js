import style from "./NotificationsBar.module.scss";
import { Spring, Notification } from "./index";
import { useSelector } from "react-redux";
function NotificationsBar() {
    const notificationList = useSelector((state) => state.notification);
    const showNotifications = notificationList.slice(0, 3);
  return (
    <div className={style.notificationsBar}>
        <Spring>
            <div className={style.notificationsBarList}>
                { showNotifications.map(currentNotification =>
                    <div className={style.notificationsBarListNoti} key={currentNotification.text}>
                        <Notification notification={currentNotification}></Notification>
                    </div>
                )}
            </div>
        </Spring>
    </div>
  );
}

export default NotificationsBar;
