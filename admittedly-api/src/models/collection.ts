import { Document, model, Model, Schema } from "mongoose"
import { Interfaces } from "admittedly-lib"
import { DefaultSchema } from "./default-schema";

let schema = {
    //do not use auto-generated id
    _id: { 
        type: String, 
        required: true
    }
};

export interface CollectionDocument extends Document, Interfaces.Collection {
}

export const CollectionModel: Model<CollectionDocument> = model<CollectionDocument>("collections", new DefaultSchema(schema));
