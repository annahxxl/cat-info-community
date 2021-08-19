import { Comments, CommentsSchema } from './../comments/comments.schema';
import { Cat, CatSchema } from 'src/cats/cats.schema';
import { AuthModule } from './../auth/auth.module';
import { CatsController } from './controller/cats.controller';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { CatsRepository } from './cats.repository';
import { CatsService } from './service/cats.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Comments.name, schema: CommentsSchema },
      { name: Cat.name, schema: CatSchema },
    ]),
    MulterModule.register({ dest: './upload' }),
    forwardRef(() => AuthModule), // 순환 종속성 해결
  ],
  controllers: [CatsController],
  providers: [CatsService, CatsRepository],
  exports: [CatsService, CatsRepository],
})
export class CatsModule {}
