import { Document, model, Model, Schema, SchemaOptions, SchemaDefinition } from "mongoose"
import * as mongoose from "mongoose"

export class DefaultSchema extends Schema {
    constructor(def) {
        super(def, { timestamps: true });

        this.virtual('id').
            get(function () { return this._id }).
            set(function (v) { this._id = v; });

        this.set('toJSON', {
            virtuals: false,
            transform: function (doc, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            }
        });
    }
}

export { Document, Schema }

/**
 * The helper to create mongoose Model
 * @param name the name of collection in database
 * @param schema the schema of collection, it can be empty object.
 */
export function createModel<T extends Document>(name: string, schema: SchemaDefinition | Schema): Model<T> {
    let _schema: Schema;
    if (schema instanceof Schema) {
        _schema = schema;
    } else {
        let callback = schema.callback as Function;
        delete schema.callback;
        _schema = new DefaultSchema(schema);
        if (callback) {
            callback(_schema)
        }
    }

    return model<T>(name, _schema);
}

