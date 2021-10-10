import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @ApiProperty({ description: 'The name of a coffe' })
  @IsString()
  readonly title: string;

  @IsString()
  readonly brand: string;

  @ApiProperty({ example: ['vanilla'] })
  @IsString({ each: true })
  readonly flavors: string[];
}
