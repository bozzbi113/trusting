import withAuthRoute from "./WithAuthRoute"

const PublicRoute = withAuthRoute(() => true, "/home")
export default PublicRoute
