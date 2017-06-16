import { Route, RouteContext } from "../lib/Route";
import Log from "../lib/Log";

export class UserPreferenceRoute extends Route {
    urlBase() {
        return "user-preference";
    }

    register() {
        this.get("/", this.userPreference);
    }

    userPreference(ctx: RouteContext) {
        ctx.body = "good";
    }
}