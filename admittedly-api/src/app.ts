import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as mongoose from 'mongoose';
import * as bodyparser from 'koa-bodyparser';
import * as logger from 'koa-logger';

import { environment } from "./environment";
import { cors } from "./middlewares/cors";
import { https } from "./middlewares/https";

//DB
mongoose.connect(environment.db_connection_string);

const app = new Koa();
app.use(logger());
app.use(bodyparser());
if (environment.cors_origin != false) {
    app.use(cors(environment.cors_origin as string))
}

if (environment.focus_https) {
    app.use(https)
}

