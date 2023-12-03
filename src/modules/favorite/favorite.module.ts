import { ArtistController } from './favorite.controller';
import { Favorite } from './favorite.entity';
import { FavoritesService } from './favorite.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Favorite])],
  controllers: [ArtistController],
  providers: [FavoritesService],
})
export class UserModule {}
