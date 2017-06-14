import { BaseInterface } from "./base-interface";

export interface Collection extends BaseInterface {
    data?:CollectionItem[];
}

export interface CollectionItem {
    display?:string;
    value?:string;
    tags?:string[];
}