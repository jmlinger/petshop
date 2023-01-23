import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { petWhereInput } from './pet-where.input';
import { Type } from 'class-transformer';
import { petOrderByWithRelationInput } from './pet-order-by-with-relation.input';
import { petWhereUniqueInput } from './pet-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PetScalarFieldEnum } from '../prisma/pet-scalar-field.enum';

@ArgsType()
export class FindFirstpetArgs {

    @Field(() => petWhereInput, {nullable:true})
    @Type(() => petWhereInput)
    where?: petWhereInput;

    @Field(() => [petOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<petOrderByWithRelationInput>;

    @Field(() => petWhereUniqueInput, {nullable:true})
    cursor?: petWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PetScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PetScalarFieldEnum>;
}
