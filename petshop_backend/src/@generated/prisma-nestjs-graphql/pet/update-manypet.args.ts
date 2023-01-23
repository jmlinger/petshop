import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { petUpdateManyMutationInput } from './pet-update-many-mutation.input';
import { Type } from 'class-transformer';
import { petWhereInput } from './pet-where.input';

@ArgsType()
export class UpdateManypetArgs {

    @Field(() => petUpdateManyMutationInput, {nullable:false})
    @Type(() => petUpdateManyMutationInput)
    data!: petUpdateManyMutationInput;

    @Field(() => petWhereInput, {nullable:true})
    @Type(() => petWhereInput)
    where?: petWhereInput;
}
