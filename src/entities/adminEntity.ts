import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import emprestimoEntity from "./emprestimoEntity";


@Entity()
export default class adminEntity {
  @PrimaryGeneratedColumn()
  id!: number; 
  @Column()
  nome: string;
  @Column()
  senha: string;
  @Column()
  cpf: string;
  @OneToMany(()=> emprestimoEntity, (emprestimo) => emprestimo.admin)
  emprestimo: emprestimoEntity
 
  constructor(
    nome: string,
    senha: string,
    cpf: string,
    ) {
    this.nome = nome;
    this.senha = senha;
    this.cpf = cpf;
 }
}
