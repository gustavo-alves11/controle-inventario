import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export default class devolucaoEntity {
  @PrimaryGeneratedColumn()
  id!: number; 
  @Column()
  data: Date;
  //relacionamento de OneToOne com emprestimo, porem esse tipo de relacionameto só vai na classe que "recebe o id"
  constructor(
    data: Date,
    ) {
    this.data = data;
 }
}
