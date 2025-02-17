import notification from "../../assets/header/notification.svg";
import notification__active from "../../assets/header/notification_active.svg";
import classes from "./notificationAlert.module.css";

// Manual prop typing
function NotificationAlert({
  notificationHandler,
  isVisible,
}: {
  notificationHandler: () => void;
  isVisible: boolean;
}) {
  return isVisible ? (
    <div className={classes.box} onClick={notificationHandler}>
      <img src={notification} alt="notification" className={classes.boxImg} />
      <img
        src={notification__active}
        alt="notification alert"
        className={classes.boxImgAlert}
      />
    </div>
  ) : null;
}

export default NotificationAlert;
