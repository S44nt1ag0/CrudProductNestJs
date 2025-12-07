import { IsNotEmpty, IsNumber, IsOptional, isString } from 'class-validator';

export class ProductDto {
  @IsOptional()
  id: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNumber()
  price: number;
}

export class DeleteProductDto {
  @IsNotEmpty()
  id: string;
}
