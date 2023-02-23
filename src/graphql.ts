
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Shop {
    id: number;
    name: string;
    type?: Nullable<string>;
}

export interface IQuery {
    shops(): Shop[] | Promise<Shop[]>;
}

type Nullable<T> = T | null;
