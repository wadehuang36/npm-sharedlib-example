import { Interfaces } from "example-lib"
import { createModel, Document, Schema } from "./_helper";

let schema = {
    type: String,
    message: String,
    stack: String,
    createdAt: Date,
    extraOptions: {
        timestamps: false,
        versionKey: false,
        capped: { size: 5242880, max: 1000 }
    }
};

export interface LogDocument extends Document, Interfaces.Log { }

export const LogModel = createModel<LogDocument>("logs", schema);
