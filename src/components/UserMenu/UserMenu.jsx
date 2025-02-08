import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import s from "./UserMenu.module.css"

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <div className={s.userMenu}>
            <p>Welcome, <span className={s.userName}>{user.name}</span> </p>
            <button className={s.logOutBtn} type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </div>
    )
};

