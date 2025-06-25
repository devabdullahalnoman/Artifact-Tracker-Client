import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../shared/LoadingSpinner";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/signin"></Navigate>;
  }

  return children;
};

export default PrivateRoute;
