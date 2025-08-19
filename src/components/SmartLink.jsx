import { Link } from "react-router-dom";

const SmartLink = ({ to, newTab = false, children, ...props }) => {
  if (newTab) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  return <Link to={to} {...props}>{children}</Link>;
};

export default SmartLink;
