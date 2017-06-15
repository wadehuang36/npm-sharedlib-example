import * as Koa from 'koa';
import * as Router from 'koa-router';
import { environment } from "../environment";
import { Interfaces, UrlHelper } from "admittedly-lib";


export interface RouteContext extends Router.IRouterContext {
    user: Interfaces.User;
    isAuthenticated: boolean;
}

/**
 * abstract Route Class to reduce contraction.
 */
export abstract class Route {
    public router = new Router();

    constructor() {
        this.router.use.apply(this.router, this.middlewares());
        this.register();
    }

    abstract register();


    /**
     * the root of url, default is environment.urlRoot ("/")
     */
    urlRoot(): string {
        return environment.urlRoot;
    }

    /**
     * the base of url, the url is composed by /{urlToot}/{urlBase}/{path+}
     */
    abstract urlBase();   

    /**
     * middlewares for whole this route
     */
    middlewares(): Array<Router.IMiddleware> {
        return [];
    }

    get(path: string, ...middleware: Array<Router.IMiddleware>) {
        this.router.get.apply(this.router, [<any>this.url(path)].concat(middleware));
    }

    post(path: string, ...middleware: Array<Router.IMiddleware>) {
        this.router.post.apply(this.router, [<any>this.url(path)].concat(middleware));
    }

    patch(path: string, ...middleware: Array<Router.IMiddleware>) {
        this.router.patch.apply(this.router, [<any>this.url(path)].concat(middleware));
    }

    delete(path: string, ...middleware: Array<Router.IMiddleware>) {
        this.router.delete.apply(this.router, [<any>this.url(path)].concat(middleware));
    }

    private url(path: string) {
        let url = UrlHelper.build([this.urlRoot(), this.urlBase(), path]);
        console.log("Url", url);
        return url;
    }
}