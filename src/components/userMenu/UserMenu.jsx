import { useState } from "react";
import { useDispatch } from "react-redux";
import useAuth from "../../hookUseAuth/HookUseAuth";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <div className={css.userMenu}>
      {isLoggedIn ? (
        <>
          <span className={css.username}>Welcome, {user.name}</span>
          <div onClick={handleMenu} className={css.menuTrigger}>
            Click here to open menu
          </div>
          {isMenuOpen && (
            <div className={css.menu}>
              <button onClick={() => dispatch(logOut())} className={css.logoutButton}>
                Logout
              </button>
            </div>
          )}
        </>
      ) : (
        <span className={css.username}>Welcome, User</span>
      )}
    </div>
  );
};

export default UserMenu;
