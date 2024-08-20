import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = ({ isAuthenticated, redirectPath = "/", children }) => {
  if (isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  return children || <Outlet />;
};

PublicRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string,
  children: PropTypes.node,
};

// PublicRoutes.defaultProps = {
//   redirectPath: "/",
//   children: null,
// };

export default PublicRoutes;
