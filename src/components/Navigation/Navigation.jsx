import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Stack } from "@mui/material";

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Stack
        direction="row"
        spacing={4}
        sx={{
            justifyContent: "flex-start",
            alignItems: "center",
        }}>
            <NavLink to="/">
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink to="/contacts">
                    Contacts
                </NavLink>
            )}
        </Stack>
    )
};