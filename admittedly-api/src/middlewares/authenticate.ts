import { UserModel } from "./models/user";
import { RouteContext } from "../lib/route";
const REG_BEARER = /^Bearer (.+)/i;

export async function authenticate(ctx: RouteContext, next) {
    if (ctx.user == null) {
        let authorization = ctx.request.headers["authorization"];
        if (REG_BEARER.test(authorization)) {
            let token = REG_BEARER.exec(authorization)[1];
            let user = await UserModel.findOne({ token: token });
            if (user != null) {
                ctx.user = user;
                ctx.isAuthenticated = true;
            }
        }
    }

    return next();
}
