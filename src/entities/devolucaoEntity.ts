import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export default class devolucaoEntity {
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
