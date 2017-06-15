import * as Router from 'koa-router';
import * as Koa from "koa"
import { Utils } from "admittedly-lib";
import { Route } from '../lib/Route';
import Log from "../lib/Log";


/**
 * register routes in ./routes
 * @param app the instance of Koa
 *//**  */
export async function initializeRoutes(app: Koa) {
    // auth

    // load Routes
    let modules = await Utils.loadModules(__dirname);

    for (let mod of modules) {
        for (let name of Object.getOwnPropertyNames(mod)) {
            let routeType = mod[name];
            if (routeType.prototype instanceof Route) {
                Log.d(`${name} Loaded`);
                let route = new routeType();
                app.use(route.router.routes());
            }
        }
    }
}

