import withAuthRoute from "./WithAuthRoute"
import { getToken } from "../../utils/localStore"
const PrivateRoute = withAuthRoute(() => true, "/login")
export default PrivateRoute
