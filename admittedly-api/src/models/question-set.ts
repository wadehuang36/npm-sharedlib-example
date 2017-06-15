import { Interfaces } from "admittedly-lib"
import { createModel, Document, Schema} from "./_helper";


let schema = {
    callback:function(schema:Schema){
        schema.index("name")
    }
};

export interface QuestionSetDocument extends Document, Interfaces.QuestionSet { }

export const QuestionSetModel = createModel<QuestionSetDocument>("questionSets", schema);
