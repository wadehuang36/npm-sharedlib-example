import { Interfaces } from "admittedly-lib"
import { createModel, Document } from "./_helper";

let schema = {
    //do not use auto-generated id
    _id: {
        type: String,
        required: true
    }
};

export interface CollectionDocument extends Document, Interfaces.Collection { }

export const CollectionModel = createModel<CollectionDocument>("collections", schema);
