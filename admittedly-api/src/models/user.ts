import { Interfaces } from "admittedly-lib"
import { createModel, Document, Schema } from "./_helper";

let schema = {
    name: String,
    token: String,
};

export interface UserDocument extends Document, Interfaces.User { }

export const UserModel = createModel<UserDocument>("users", schema);
