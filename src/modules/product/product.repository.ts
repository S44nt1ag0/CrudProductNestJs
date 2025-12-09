import { PRODUCT_REPOSITORY } from 'src/core/constants';
import { Product } from './entities/product.entity';
import { Inject, Injectable } from '@nestjs/common';
import { DeleteProductDto, ProductDto } from './dto/product.dto';
import { JwtPayload } from '../auth/dto/jwt.dto';

@Injectable()
export class ProductRepository {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: typeof Product,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }

  async create(product: ProductDto, user: JwtPayload): Promise<Product> {
    return await this.productRepository.create({
      ...product,
      userId: user?.id,
    });
  }

  async productById(product: DeleteProductDto): Promise<Product | null> {
    return await this.productRepository.findByPk(product.id);
  }

  async deleteProduct(product: DeleteProductDto): Promise<number> {
    return await this.productRepository.destroy({ where: { id: product.id } });
  }
}
