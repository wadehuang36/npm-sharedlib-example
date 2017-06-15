export interface Log {
    id?: string;
    type?: string;
    message?: string;
    stacktrace?: string[];
    createdAt?: Date;
}