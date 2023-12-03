import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artist } from './artist.entity';

@Injectable()
export class ArtistService {
  constructor(
    @InjectRepository(Artist) private artistRepository: Repository<Artist>,
  ) {}

  findAll(): Promise<Artist[]> {
    return this.artistRepository.find();
  }

  findById(id: string): Promise<Artist> {
    return this.artistRepository.findOneBy({ id: id }).then((artist) => {
      if (!artist) {
        throw new NotFoundException('Artist not found');
      }
      return artist;
    });
  }

  create(artist: Artist): Promise<Artist> {
    return this.artistRepository.save(artist);
  }

  remove(id: string) {
    return this.artistRepository.delete(id).then((result) => {
      if (result.affected === 0) {
        throw new Error('Artist not found');
      }
    });
  }
}
