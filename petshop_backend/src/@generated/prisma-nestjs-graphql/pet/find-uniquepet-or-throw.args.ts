import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { petWhereUniqueInput } from './pet-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquepetOrThrowArgs {

    @Field(() => petWhereUniqueInput, {nullable:false})
    @Type(() => petWhereUniqueInput)
    where!: petWhereUniqueInput;
}