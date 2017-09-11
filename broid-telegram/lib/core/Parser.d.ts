/// <reference types="bluebird" />
import { IActivityStream } from '@broid/schemas';
import * as Promise from 'bluebird';
export declare class Parser {
    serviceID: string;
    generatorName: string;
    private logger;
    constructor(serviceName: string, serviceID: string, logLevel: string);
    validate(event: any): Promise<IActivityStream>;
    parse(event: any): Promise<IActivityStream>;
    normalize(evt: any): Promise<any>;
    private createIdentifier();
    private createActivityStream(normalized);
}