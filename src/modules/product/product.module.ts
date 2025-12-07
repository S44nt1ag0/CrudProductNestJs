import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';
import { PRODUCT_REPOSITORY } from 'src/core/constants';
import { Product } from './entities/product.entity';

export const productProviders = [
  {
    provide: PRODUCT_REPOSITORY,
    useValue: Product,
  },
];

@Module({
  imports: [],
  providers: [ProductService, ProductRepository, ...productProviders],
  controllers: [ProductController],
})
export class ProductModule {}
