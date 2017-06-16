import { BaseInterface } from "./base-interface";

/**
 * Config is a one document of Collection in DB
 */
export interface Config extends BaseInterface {
    /**
     * The active QuestionSet for User Preference
     */
    UserPreferenceQuestionSetId: string;
}