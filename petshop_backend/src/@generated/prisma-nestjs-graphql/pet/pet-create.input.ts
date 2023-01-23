import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class petCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    age!: number;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:false})
    tutorsName!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
