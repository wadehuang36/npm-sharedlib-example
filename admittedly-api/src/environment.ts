import { Dict } from 'admittedly-lib';
interface Environment {
    db_connection_string?: string;
    cors_origin?: boolean | string;
    focus_https?: boolean;
    production?: boolean;
    port?: number;
    ssl_port?: 443;
    urlRoot?: string;
}

const defaultEnv: Environment = {
    db_connection_string: "mongodb://localhost:27017/admittedly",
    cors_origin: "*",
    production: false,
    focus_https: false,
    urlRoot: "/",
    port: 3000,
    ssl_port: 443
}

const stageEnvs: Dict<Environment> = {
    development: {
    },
    qa: {
    },
    production: {
        port: 80,
        focus_https: true,
        production: true
    }
}

let stageEnv = stageEnvs[process.env["NODE_ENV"]];

//load process env
let runtimeEnv: Environment = {
    db_connection_string: process.env["DB_CONN"],
    cors_origin: process.env["CORS_ORIGIN"],
    focus_https: process.env["FOCUS_HTTPS"],
    port: process.env["PORT"],
    ssl_port: process.env["SSL_PORT"],
}

//delete null
for (let key of Object.getOwnPropertyNames(runtimeEnv)) {
    if (runtimeEnv[key] == undefined) {
        delete runtimeEnv[key];
    }
}

// env is default + state + process
export const environment: Environment = Object.assign(defaultEnv, stageEnv, runtimeEnv);