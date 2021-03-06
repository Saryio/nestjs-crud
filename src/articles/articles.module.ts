import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from './entities/article.entity';
import { ExternalRequestService } from './external-request/external-request.service';
import { ApiProperty } from '@nestjs/swagger';

@Module({
  imports: [MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }])],
  controllers: [ArticlesController],
  providers: [ArticlesService, ExternalRequestService]
})
export class ArticlesModule {}
