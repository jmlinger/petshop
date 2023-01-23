import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { petWhereInput } from './pet-where.input';
import { Type } from 'class-transformer';
import { petOrderByWithAggregationInput } from './pet-order-by-with-aggregation.input';
import { PetScalarFieldEnum } from '../prisma/pet-scalar-field.enum';
import { petScalarWhereWithAggregatesInput } from './pet-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class petGroupByArgs {

    @Field(() => petWhereInput, {nullable:true})
    @Type(() => petWhereInput)
    where?: petWhereInput;

    @Field(() => [petOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<petOrderByWithAggregationInput>;

    @Field(() => [PetScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PetScalarFieldEnum>;

    @Field(() => petScalarWhereWithAggregatesInput, {nullable:true})
    having?: petScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
