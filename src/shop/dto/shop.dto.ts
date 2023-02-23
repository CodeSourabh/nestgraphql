import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Shop {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  type: string;
}
