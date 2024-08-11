import { useSelector } from "react-redux";
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../redux/auth/selectors";

const useAuth = () => {
  return {
    user: useSelector(selectUser),
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
  };
};
export default useAuth;
