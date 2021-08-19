import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { Comments, CommentsSchema } from './comments.schema';
import { CommentsController } from './controller/comments.controller';
import { CommentsService } from './service/comments.service';
import { CatsModule } from 'src/cats/cats.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Comments.name, schema: CommentsSchema },
    ]),
    CatsModule,
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
