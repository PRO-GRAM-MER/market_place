import logo from "../../assets/header/logoWithName.svg";

import CustomLink from "../customLink/CustomLink";
import NotificationAlert from "../notification/NotificationAlert";
import classes from "./header.module.css";

function Header() {
  const handleNotificationClick = () => {
    console.log("Notification clicked!");
  };
  const navigateToPath = "/login";

  return (
    <header className={classes.box}>
      <img src={logo} alt="Logo" className={classes.boxLogo} />
      <CustomLink to={navigateToPath} isVisible={true} />

      <NotificationAlert
        notificationHandler={handleNotificationClick}
        isVisible={true}
      />
    </header>
  );
}
export default Header;
