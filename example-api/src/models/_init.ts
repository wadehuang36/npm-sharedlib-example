import { Utils } from "example-lib";
import { Model, connection } from "mongoose";
import { UserModel } from "./user";
import Log from "../lib/Log";

export async function dataInitialize() {
    connection.db.admin().listDatabases().then(async result => {
        let dbs = result.databases as Array<any>;
        let dbName = connection.db.databaseName;
        if (!dbs.some(x => x.name == dbName)) {
            Log.d(`Database: ${dbName} don't exist, start initializing`);
            await init_data()
        }

        await ensureIndexes();
    })
}

let callback = function (err) {
    if (err)
        Log.e("EnsureIndexes Failed", err);
};

async function ensureIndexes() {
    let modules = await Utils.loadModules(__dirname);

    for (let mod of modules) {
        for (let name of Object.getOwnPropertyNames(mod)) {
            let prop = mod[name];
            if (prop.prototype instanceof Model) {
                Log.d("EnsureIndexes Model:", name);
                await (prop as Model<any>).ensureIndexes().catch(callback);
            }
        }
    }
}

async function init_data() {
    await UserModel.create({
        name: "admin",
        token: "abc"
    }).catch(callback);
}