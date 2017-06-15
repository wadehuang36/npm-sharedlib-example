interface Environment {
    db_connection_string: string;
    cors_origin: boolean | string;
    focus_https: boolean;
    production: boolean;
    port: number;
}

const defaultEnv = {
    db_connection_string: "mongodb://localhost:27017/admittedly",
    cors_origin: "*",
    production: false,
    focus_https: false,
    port: 3000,
    ssl_port: 443
}

const stageEnvs = {
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
let runtimeEnv = {
    db_connection_string: process.env["DB_CONN"],
    cors_origin: process.env["CORS_ORIGIN"]
}

//delete null
for (let key of Object.getOwnPropertyNames(runtimeEnv)) {
    if (runtimeEnv[key] == undefined) {
        delete runtimeEnv[key];
    }
}

// env is default + state + process
export const environment: Environment = Object.assign(defaultEnv, stageEnv, runtimeEnv);