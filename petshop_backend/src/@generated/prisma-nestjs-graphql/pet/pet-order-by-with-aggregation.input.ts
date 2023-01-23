import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { petCountOrderByAggregateInput } from './pet-count-order-by-aggregate.input';
import { petAvgOrderByAggregateInput } from './pet-avg-order-by-aggregate.input';
import { petMaxOrderByAggregateInput } from './pet-max-order-by-aggregate.input';
import { petMinOrderByAggregateInput } from './pet-min-order-by-aggregate.input';
import { petSumOrderByAggregateInput } from './pet-sum-order-by-aggregate.input';

@InputType()
export class petOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tutorsName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => petCountOrderByAggregateInput, {nullable:true})
    _count?: petCountOrderByAggregateInput;

    @Field(() => petAvgOrderByAggregateInput, {nullable:true})
    _avg?: petAvgOrderByAggregateInput;

    @Field(() => petMaxOrderByAggregateInput, {nullable:true})
    _max?: petMaxOrderByAggregateInput;

    @Field(() => petMinOrderByAggregateInput, {nullable:true})
    _min?: petMinOrderByAggregateInput;

    @Field(() => petSumOrderByAggregateInput, {nullable:true})
    _sum?: petSumOrderByAggregateInput;
}
