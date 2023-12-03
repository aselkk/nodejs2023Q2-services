import { IsNumber, IsString, IsUUID } from 'class-validator';

import { Track } from '../track.entity';

export class CreateTrackDto {
  @IsString()
  name: string;

  @IsNumber()
  duration: number;

  @IsUUID()
  artistId: null;

  @IsUUID()
  albumId: string;

  toEntity(): Track {
    const track = new Track();
    track.name = this.name;
    track.duration = this.duration;
    track.artistId = this.artistId;
    track.albumId = this.albumId;
    return track;
  }
}
