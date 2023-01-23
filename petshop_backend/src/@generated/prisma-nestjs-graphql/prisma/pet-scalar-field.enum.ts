import { registerEnumType } from '@nestjs/graphql';

export enum PetScalarFieldEnum {
    id = "id",
    name = "name",
    age = "age",
    type = "type",
    tutorsName = "tutorsName",
    createdAt = "createdAt"
}


registerEnumType(PetScalarFieldEnum, { name: 'PetScalarFieldEnum', description: undefined })
