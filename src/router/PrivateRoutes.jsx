import PropTypes from 'prop-types';
import { Navigate, Outlet } from "react-router-dom";


const PrivateRoutes = ({
  isAuthenticated,
  redirectPath = "/login",
  children,
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  return children || <Outlet />;
};

PrivateRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    redirectPath: PropTypes.string,
    children: PropTypes.node
}

// PrivateRoutes.defaultProps = {
//     redirectPath: '/login',
//     children: null
// }

export default PrivateRoutes;
