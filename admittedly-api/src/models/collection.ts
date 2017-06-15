import { Interfaces } from "admittedly-lib"
import { createModel, Document, Schema } from "./_helper";

let schema = {
    _id: {
        type: String //use string, not object id
    }
};

export interface CollectionDocument extends Document, Interfaces.Collection { }

export const CollectionModel = createModel<CollectionDocument>("collections", schema);
