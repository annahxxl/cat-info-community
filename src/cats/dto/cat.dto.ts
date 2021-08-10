import { ApiProperty } from '@nestjs/swagger';

export class ReadOnlyCatDto {
  @ApiProperty({
    description: 'id',
    required: true,
    example: '어쩌구저쩌구',
  })
  id: string;

  @ApiProperty({
    description: 'email',
    required: true,
    example: '8annahxxl@gmail.com',
  })
  email: string;

  @ApiProperty({
    description: 'name',
    required: true,
    example: 'Hanna Lee',
  })
  name: string;
}
