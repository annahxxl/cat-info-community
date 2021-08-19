import { Comments, CommentsSchema } from './../comments/comments.schema';
import { Cat, CatSchema } from 'src/cats/cats.schema';
import { AuthModule } from './../auth/auth.module';
import { CatsController } from './controller/cats.controller';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { CatsRepository } from './cats.repository';
import { CatsService } from './service/cats.service';
import { MulterExtendedModule } from 'nestjs-multer-extended';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: Comments.name, schema: CommentsSchema },
      { name: Cat.name, schema: CatSchema },
    ]),
    MulterModule.register({ dest: './upload' }),
    MulterExtendedModule.register({
      awsConfig: {
        accessKeyId: process.env.AWS_S3_ACCESS_KEY,
        secretAccessKey: process.env.AWS_S3_SECRET_KEY,
        region: process.env.AWS_S3_REGIOM,
        // ... any options you want to pass to the AWS instance
      },
      bucket: process.env.AWS_S3_BUCKET_NAME,
      basePath: 'C.I.C',
      fileSize: 1 * 1024 * 1024,
    }),
    forwardRef(() => AuthModule), // 순환 종속성 해결
  ],
  controllers: [CatsController],
  providers: [CatsService, CatsRepository],
  exports: [CatsService, CatsRepository],
})
export class CatsModule {}
