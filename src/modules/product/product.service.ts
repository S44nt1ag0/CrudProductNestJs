import { BadRequestException, Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { Product } from './entities/product.entity';
import { DeleteProductDto, ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }

  async createProduct(product: ProductDto): Promise<any> {
    return await this.productRepository.create(product);
  }

  async deleteProduct(deleteProductDto: DeleteProductDto): Promise<any> {
    const product = await this.productRepository.productById(deleteProductDto);
    if (!product) {
      throw new BadRequestException('Product not found');
    }
    await this.productRepository.deleteProduct(deleteProductDto);

    return {
      message: 'Product deleted successfully',
    };
  }
}
