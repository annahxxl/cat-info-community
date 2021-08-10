import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';

export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    description: 'id',
    required: true,
    example: '어쩌구저쩌구',
  })
  id: string;
}
