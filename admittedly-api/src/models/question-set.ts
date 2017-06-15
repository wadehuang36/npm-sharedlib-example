import { Interfaces } from "admittedly-lib"
import { createModel, Document, Schema} from "./_helper";


let schema = {
    title: String,
    layouts: Object,
    sections: Object
};

export interface QuestionSetDocument extends Document, Interfaces.QuestionSet { }

export const QuestionSetModel = createModel<QuestionSetDocument>("question-sets", schema);
