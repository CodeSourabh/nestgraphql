import { Query, Resolver } from '@nestjs/graphql';
import { Shop } from './dto/shop.dto';
import { Shop as ShopModel } from '../graphql';
@Resolver((of) => Shop)
export class ShopResolver {
  @Query((returns) => [Shop], { name: 'shops' })
  getShops() {
    const arr: ShopModel[] = [
      { id: 12, name: 'Walmart', type: 'Indore' },
      { id: 123, name: 'Flipkart', type: 'Indore' },
      { id: 1234, name: 'Amazon', type: 'Indore' },
    ];
    return arr;
  }
}
