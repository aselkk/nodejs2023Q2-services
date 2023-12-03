import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Album } from './album.entity';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(Album) private albumRepository: Repository<Album>,
  ) {}

  findAll(): Promise<Album[]> {
    return this.albumRepository.find();
  }

  findById(id: string): Promise<Album> {
    return this.albumRepository.findOneBy({ id: id }).then((album) => {
      if (!album) {
        throw new NotFoundException('Album not found');
      }
      return album;
    });
  }

  create(album: Album): Promise<Album> {
    return this.albumRepository.save(album);
  }

  remove(id: string) {
    return this.albumRepository.delete(id).then((result) => {
      if (result.affected === 0) {
        throw new Error('Album not found');
      }
    });
  }
}
