import { Document, model, Model, Schema, SchemaOptions, SchemaDefinition } from "mongoose"
import * as mongoose from "mongoose"

export class DefaultSchema extends Schema {
    constructor(def, options?) {
        super(def, Object.assign({ timestamps: true }, options));

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
        let extraFunction = schema.extraFunction as Function;
        let extraOptions = schema.extraOptions;
        delete schema.extraOptions;
        delete schema.extraFunction;
        _schema = new DefaultSchema(schema, extraOptions);
        if (extraFunction) {
            extraFunction(_schema)
        }
    }

    return model<T>(name, _schema);
}

