import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';

import { CreateTrackDto } from './dtos/create-track.dto';
import { Track } from './track.entity';
import { TrackService } from './track.service';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get()
  getTracks(): Promise<Track[]> {
    return this.trackService.findAll();
  }

  @Get(':id')
  getTrackById(@Param('id', ParseUUIDPipe) id: string): Promise<Track> {
    return this.trackService.findById(id);
  }

  @Post()
  createTrack(@Body() createTrackDto: CreateTrackDto): Promise<Track> {
    return this.trackService.create(createTrackDto.toEntity());
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.trackService.remove(id);
  }
}
