import { IsBoolean, IsString } from 'class-validator';

import { Artist } from '../artist.entity';

export class CreateArtistDto {
  @IsString()
  name: string;

  @IsBoolean()
  grammy: boolean;

  toEntity(): Artist {
    const track = new Artist();
    track.name = this.name;
    track.grammy = this.grammy;
    return track;
  }
}
