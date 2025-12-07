import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ProductService } from './product.service';
import { DeleteProductDto, ProductDto } from './dto/product.dto';

@UseGuards(JwtAuthGuard)
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Post()
  createProduct(@Body() productDto: ProductDto) {
    return this.productService.createProduct(productDto);
  }

  @Delete()
  deleteProduct(@Body() deleteProductDto: DeleteProductDto) {
    return this.productService.deleteProduct(deleteProductDto);
  }
}
