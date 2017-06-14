import { Schema } from "mongoose"

export class DefaultSchema extends Schema {
    constructor(def) {
        super(def, { timestamps: true });

        this.set('toJSON', {
            virtuals: true,
            transform: function (doc, ret) {
                delete ret._id;
                delete ret.__v;
            }
        });
    }
}