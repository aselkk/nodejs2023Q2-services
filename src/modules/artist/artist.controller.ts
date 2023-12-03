import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';

import { Artist } from './artist.entity';
import { ArtistService } from './artist.service';
import { CreateArtistDto } from './dtos/create-artist.dto';

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get()
  getArtists(): Promise<Artist[]> {
    return this.artistService.findAll();
  }

  @Get(':id')
  getArtistById(@Param('id', ParseUUIDPipe) id: string): Promise<Artist> {
    return this.artistService.findById(id);
  }

  @Post()
  createArtist(@Body() createArtistDto: CreateArtistDto): Promise<Artist> {
    return this.artistService.create(createArtistDto.toEntity());
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.artistService.remove(id);
  }
}
