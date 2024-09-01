import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export default class retiradaEntity {
  @PrimaryGeneratedColumn()
  id!: number; 
  @Column()
  data: Date;
  
  constructor(
    data: Date,
    ) {
    this.data = data;
 }
}
