import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Favorite {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  to: string; // id of object in faworite list

  @Column()
  type: 'track' | 'album' | 'artist';
}
