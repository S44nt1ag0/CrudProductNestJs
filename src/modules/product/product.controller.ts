import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ProductService } from './product.service';
import { DeleteProductDto, ProductDto } from './dto/product.dto';
import { Request } from 'express';
import { JwtPayload } from '../auth/dto/jwt.dto';

@UseGuards(JwtAuthGuard)
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Post()
  createProduct(@Body() productDto: ProductDto, @Req() req: Request) {
    return this.productService.createProduct(
      productDto,
      req.user as JwtPayload,
    );
  }

  @Delete()
  deleteProduct(@Body() deleteProductDto: DeleteProductDto) {
    return this.productService.deleteProduct(deleteProductDto);
  }
}
