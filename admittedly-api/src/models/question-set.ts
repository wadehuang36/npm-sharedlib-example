import { Interfaces } from "admittedly-lib"
import { createModel, Document } from "./_helper";

let schema = {
    
};

export interface QuestionSetDocument extends Document, Interfaces.QuestionSet { }

export const QuestionSetModel = createModel<QuestionSetDocument>("questionSets", schema);
