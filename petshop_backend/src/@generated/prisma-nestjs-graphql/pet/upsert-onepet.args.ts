import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { petWhereUniqueInput } from './pet-where-unique.input';
import { Type } from 'class-transformer';
import { petCreateInput } from './pet-create.input';
import { petUpdateInput } from './pet-update.input';

@ArgsType()
export class UpsertOnepetArgs {

    @Field(() => petWhereUniqueInput, {nullable:false})
    @Type(() => petWhereUniqueInput)
    where!: petWhereUniqueInput;

    @Field(() => petCreateInput, {nullable:false})
    @Type(() => petCreateInput)
    create!: petCreateInput;

    @Field(() => petUpdateInput, {nullable:false})
    @Type(() => petUpdateInput)
    update!: petUpdateInput;
}
