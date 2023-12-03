import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Track } from './track.entity';

@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(Track) private trackRepository: Repository<Track>,
  ) {}

  findAll(): Promise<Track[]> {
    return this.trackRepository.find();
  }

  findById(id: string): Promise<Track> {
    return this.trackRepository.findOneBy({ id: id }).then((track) => {
      if (!track) {
        throw new NotFoundException('Track not found');
      }
      return track;
    });
  }

  create(track: Track): Promise<Track> {
    return this.trackRepository.save(track);
  }

  remove(id: string) {
    return this.trackRepository.delete(id).then((result) => {
      if (result.affected === 0) {
        throw new Error('Track not found');
      }
    });
  }
}
