import { Utils } from "admittedly-lib";
import { Model, connection } from "mongoose";

export async function dataInitialize() {
    connection.db.admin().listDatabases().then((result => {
        let dbs = result.databases as Array<any>;
        let dbName = connection.db.databaseName;
        if (!dbs.some(x => x.name == dbName)) {
            console.log(`Database: ${dbName} don't exist, start initializing`);
            ensureIndexes()
                .then(init_data)
                .then(() => {
                    console.log("Initialization Database Completed");
                })
                .catch((e) => {
                    console.error("Initialization Database Failed", e);
                });
        }
    }))
}

async function ensureIndexes() {
    let callback = function (err) {
        if (err)
            console.error("EnsureIndexes Failed", err);
    };

    let modules = await Utils.loadModules(__dirname);

    for (let mod of modules) {
        for (let name of Object.getOwnPropertyNames(mod)) {
            let prop = mod[name];
            if (Object.getPrototypeOf(prop).name == "Model") {
                console.log("EnsureIndexes Model:", name);
                await (prop as Model<any>).ensureIndexes().catch(callback);
            }
        }
    }
}

async function init_data() {

}