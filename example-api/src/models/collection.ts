import { Interfaces } from "example-lib"
import { createModel, Document, Schema } from "./_helper";

let schema = {
    _id:  String, //use string, not object id
    data: Array
};

export interface CollectionDocument extends Document, Interfaces.Collection { }

export const CollectionModel = createModel<CollectionDocument>("collections", schema);
