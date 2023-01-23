import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { petWhereInput } from './pet-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypetArgs {

    @Field(() => petWhereInput, {nullable:true})
    @Type(() => petWhereInput)
    where?: petWhereInput;
}
