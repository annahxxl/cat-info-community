import { Injectable } from '@nestjs/common';
import { CommentsCreateDto } from '../dto/comments.create..dto';

@Injectable()
export class CommentsService {
  async getAllComments() {}

  async createComment(id: string, commnets: CommentsCreateDto) {
    console.log(commnets);
    return 'hello world';
  }

  async plusLike(id: string) {}
}
