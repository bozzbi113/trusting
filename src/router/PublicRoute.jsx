import withAuthRoute from "./WithAuthRoute"

const PublicRoute = withAuthRoute(() => true, "/information")
export default PublicRoute
