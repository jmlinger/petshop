
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreatePetInput {
    name: string;
    age: number;
    type: string;
    tutorsName: string;
    createdAt?: Nullable<DateTime>;
}

export class UpdatePetInput {
    id: number;
    name: string;
    age: number;
    type: string;
    tutorsName: string;
    createdAt?: Nullable<DateTime>;
}

export class Pet {
    id: number;
    name: string;
    age: number;
    type: string;
    tutorsName: string;
    createdAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract pets(): Nullable<Pet>[] | Promise<Nullable<Pet>[]>;
}

export abstract class IMutation {
    abstract createPet(createPetInput: CreatePetInput): Pet | Promise<Pet>;

    abstract updatePet(updatePetInput: UpdatePetInput): Pet | Promise<Pet>;

    abstract removePet(id: number): Pet | Promise<Pet>;
}

export type DateTime = any;
type Nullable<T> = T | null;
