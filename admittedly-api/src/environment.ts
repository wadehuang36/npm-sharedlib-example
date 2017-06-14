interface Environment {
    db_connection_string: string;
    cors_origin: boolean | string;
    focus_https: boolean;
    production: boolean;
}

const defaultEnv = {
    db_connection_string: "mongodb://location:27017/admittedly",
    cors_origin: "*",
    production: false,
    focus_https: false
}

const stateEnvs = {
    development: {

    },
    qa: {

    },
    production: {
        production: true
    }
}

//load process env
let pEnv = {
    db_connection_string: process.env["DB_CONN"],
    cors_origin: process.env["CORS_ORIGIN"]
}

//delete null
for (var key in Object.getOwnPropertyNames(pEnv)) {
    if (pEnv[key] == null) {
        delete pEnv[key];
    }
}

// env is default + state + process
export const environment: Environment = Object.assign(defaultEnv, stateEnvs[process.env["NODE_ENV"]], pEnv);