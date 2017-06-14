import { BaseInterface } from "./base-interface";
import { Dict } from "../dict";
import { SectionType, QuestionType, QuestionNavType, OptionNavType } from "./types";

export interface QuestionSet extends BaseInterface {
    title?: string;
    /**
     * Readonly, auto-updated from sections
     */
    layouts?: Dict<string[]>;
    sections?: Dict<QuestionSection>;
}

export interface QuestionSection {
    title?: string;
    type?: SectionType;
    questions?: Question[];
}

export interface Question {
    /**
     * The unique Key only in a section
     */
    id?: string;
    /**
     * The type which effect UI, Handler
     */
    type?: QuestionType;
    /**
     * The Key to save in database
     */
    factor?: string;
    title?: string;
    description?: string;
    /**
     * Can Skip the question or not,
     * default is false,
     */
    canSkip?: boolean;
    /**
     * 
     */
    skipTo?: QuestionNavType;
    /**
     * Define how to move to next question,
     * If the value is ByOption,
     * will ignore question type,
     * and the continue button hides
     */
    nextTo?: QuestionNavType;
    /**
     * The data source for collection type
     */
    source?: string;
    /**
     * the hint for input
     */
    placeholder?: string;
}

export interface QuestionOption {
    title?: string;
    description?: string;
    imgUrl?: string;
    /**
     * The value that save in database
     */
    value?: string;
    /**
     * If QuestionNavType is ByOption, 
     * when click this option, 
     * will move to new question
     */
    nextTo?: OptionNavType;
}