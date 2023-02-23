import { Module } from '@nestjs/common';
import { ShopResolver } from './shop.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [ShopResolver],
})
export class ShopModule {}
