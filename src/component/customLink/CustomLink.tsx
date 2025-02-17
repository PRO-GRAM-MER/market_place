import { Link, LinkProps } from "react-router-dom";
import classes from "./customLink.module.css";

interface CustomLinkProps extends LinkProps {
  className?: string;
  isVisible: boolean;
}

function CustomLink({
  children,
  className = "",
  isVisible=true,
  ...props
}: CustomLinkProps) {
  return isVisible ? (
    <Link className={`${classes.box} ${className}`} {...props}>
      {children}
    </Link>
  ) : null;
}

export default CustomLink;
