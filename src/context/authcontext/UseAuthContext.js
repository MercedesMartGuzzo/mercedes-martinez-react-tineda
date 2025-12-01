import { useContext } from "react"
import { AuthContext } from "./authcontex/AuthContext"

export const useAuthContext = () => {
    return useContext(AuthContext);
};