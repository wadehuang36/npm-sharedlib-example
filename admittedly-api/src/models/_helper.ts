import { Document, model, Model, Schema, SchemaOptions, SchemaDefinition } from "mongoose"

class DefaultSchema extends Schema {
    constructor(def) {
        super(def, { timestamps: true });

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

export { Document }

/**
 * The helper to create mongoose Model
 * @param name the name of collection in database
 * @param schema the schema of collection, it can be empty object.
 */
export function createModel<T extends Document>(name: string, schema: SchemaDefinition | Schema): Model<T> {
    let _schema;
    if (schema instanceof Schema) {
        _schema = schema;
    } else {
        _schema = new DefaultSchema(schema);
    }

    return model<T>(name, _schema);
}

