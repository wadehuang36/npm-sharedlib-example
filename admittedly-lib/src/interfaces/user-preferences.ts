import { BaseInterface } from "./base-interface";
import { Dict } from "../dict";
import { QuestionSection } from "./questions";

export interface UserPreferenceConfig extends BaseInterface {
    questionSetId: string;
}

export interface UserPreference extends BaseInterface {
    userId?: string;
    data: Dict<string[]>;
}