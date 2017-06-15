import { LogModel } from "../models/log"
import { Interfaces } from "admittedly-lib"

function mergeMessages(arr:Array<any>): string {
    let msg = "";
    for (let obj of arr) {
        if (typeof obj == "string") {
            msg += `${obj}  `;
        } else if (obj instanceof Error) {
            msg += `${obj.name}-${obj.message} ` ;
        } else if (typeof obj == "object") {
            msg += `${JSON.stringify(obj, null, 4)}  `;
        }
    }

    return msg;
}

/**
 * Android Style Log, Two outputs, Db and console
 */
export default class Log {
    /**
     * Debug log, only write to console
     */
    static d(...messages: any[]) {
        console.log.apply(null, messages);
    }

    /**
     * Info log, write to db and console
     */
    static i(...messages: any[]) {
        console.log.apply(null, messages);
        
        if (messages.length > 0) {
            let msg = mergeMessages(messages);
            let log: Interfaces.Log = {
                type: "info",
                message: msg,
                createdAt: new Date()
            };

            LogModel.create(log).catch(Log.d);
        }
    }

    /**
     * Error log, write to db and console
     */
    static e(message: any, error?: Error, ...optionalParams: any[]) {
        let arr = [message, error].concat(optionalParams);
        console.error.apply(null, arr);

        if (message) {
            let msg = mergeMessages(arr);
            let log: Interfaces.Log = {
                type: "error",
                message: msg,
                createdAt: new Date()
            };

            if(error){
                log.stack = error.stack;
            }
            
            LogModel.create(log).catch(Log.d);
        }
    }
}