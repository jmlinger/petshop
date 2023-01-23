import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { petCreateInput } from './pet-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepetArgs {

    @Field(() => petCreateInput, {nullable:false})
    @Type(() => petCreateInput)
    data!: petCreateInput;
}
