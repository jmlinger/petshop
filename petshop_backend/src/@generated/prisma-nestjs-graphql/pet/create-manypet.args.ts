import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { petCreateManyInput } from './pet-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManypetArgs {

    @Field(() => [petCreateManyInput], {nullable:false})
    @Type(() => petCreateManyInput)
    data!: Array<petCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
