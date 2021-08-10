import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CatRequestDto {
  @ApiProperty({
    description: 'email',
    required: true,
    example: '8annahxxl@gmail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'password',
    required: true,
    example: '123',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'name',
    required: true,
    example: 'Hanna Lee',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
