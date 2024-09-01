import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import EnumStatus from "../enum/EnumStatus";
import devolucaoEntity from "./devolucaoEntity";
import retiradaEntity from "./retiradaEntity";
import produtosEntity from "./produtosEntity";
import userEntity from "./userEntity";
import adminEntity from "./adminEntity";

@Entity()
export default class emprestimoEntity {
  @PrimaryGeneratedColumn()
  id!: number; 
  @Column()
  data: Date;
  @Column()
  status: EnumStatus;
  @OneToOne(()=> devolucaoEntity)
  @JoinColumn()
  devolucao: devolucaoEntity
  @OneToOne(()=> retiradaEntity)
  @JoinColumn()
  retirada: retiradaEntity
  @ManyToOne(()=> produtosEntity, (produto) => produto.emprestimo)
  produto: produtosEntity
  @ManyToOne(()=>userEntity, (user) => user.emprestimo)
  usuario: userEntity
  @ManyToOne(()=>adminEntity, (admin) => admin.emprestimo)
  admin: adminEntity

  constructor(
    data: Date,
    status: EnumStatus,
  ) {
    this.data = data;
    this.status = status;
    
 }
}
