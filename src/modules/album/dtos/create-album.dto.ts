import { IsBoolean, IsString } from 'class-validator';

import { Album } from '../album.entity';

export class CreateAlbumDto {
  @IsString()
  name: string;

  @IsBoolean()
  grammy: boolean;

  toEntity(): Album {
    const track = new Album();
    track.name = this.name;
    track.grammy = this.grammy;
    return track;
  }
}
