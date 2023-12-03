import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';

import { Album } from './album.entity';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dtos/create-album.dto';

@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get()
  getAlbums(): Promise<Album[]> {
    return this.albumService.findAll();
  }

  @Get(':id')
  getAlbumById(@Param('id', ParseUUIDPipe) id: string): Promise<Album> {
    return this.albumService.findById(id);
  }

  @Post()
  createAlbum(@Body() createAlbumDto: CreateAlbumDto): Promise<Album> {
    return this.albumService.create(createAlbumDto.toEntity());
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.albumService.remove(id);
  }
}
