import * as Koa from 'koa';

/**
 * The middleware for redirect to https
 * @param origin allowed origin
 */
export async function redirectToHttps(ctx: Koa.Context, next?): Promise<any> | null {
    if (!ctx.secure) {
        ctx.redirect(`https://${ctx.hostname}${ctx.url}`);
    } else {
        await next();
    }
}

