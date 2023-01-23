import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { petUpdateInput } from './pet-update.input';
import { Type } from 'class-transformer';
import { petWhereUniqueInput } from './pet-where-unique.input';

@ArgsType()
export class UpdateOnepetArgs {

    @Field(() => petUpdateInput, {nullable:false})
    @Type(() => petUpdateInput)
    data!: petUpdateInput;

    @Field(() => petWhereUniqueInput, {nullable:false})
    @Type(() => petWhereUniqueInput)
    where!: petWhereUniqueInput;
}
