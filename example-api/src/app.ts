import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as mongoose from 'mongoose';
import * as bodyparser from 'koa-bodyparser';
import * as logger from 'koa-logger';
import * as http from 'http';
import * as https from 'https';

import Log from "./lib/Log";
import { environment } from "./environment";
import { cors } from "./middlewares/cors";
import { redirectToHttps } from "./middlewares/https";
import { Utils, Interfaces } from "example-lib";
import { dataInitialize } from "./models/_init";
import { initializeRoutes } from "./routes/_init";

//DB
(<any>mongoose).Promise = global.Promise;
mongoose.connect(environment.db_connection_string).then(dataInitialize);

const app = new Koa();
app.use(logger());
app.use(bodyparser());
if (environment.cors_origin != false) {
    app.use(cors(environment.cors_origin as string))
}

if (environment.focus_https) {
    app.use(redirectToHttps)
}

initializeRoutes(app);

Log.i("Environments", JSON.stringify(environment));
http.createServer(app.callback()).listen(environment.port, () => {
    Log.i("HTTP Started");
});
