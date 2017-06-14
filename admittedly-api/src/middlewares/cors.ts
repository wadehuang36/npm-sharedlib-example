import * as Koa from 'koa';

/**
 * The middleware for cross-origin
 * @param origin allowed origin
 */
export function cors(origin?: string): Function {
    return async function cors(ctx: Koa.Context, next?): Promise<any> | null {
        ctx.set('Access-Control-Allow-Origin', origin || '*');
        ctx.set('Access-Control-Allow-Methods', "GET,POST,PUT,PATCH,DELETE,HEAD");

        let headers = ctx.get("Access-Control-Request-Headers");
        if (headers) {
            ctx.set('Access-Control-Allow-Headers', headers);
        }

        if (ctx.method === "OPTIONS") {
            ctx.status = 204;
        } else if (next) {
            await next();
        }
    }
}
