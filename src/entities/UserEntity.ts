import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import emprestimoEntity from "./EmprestimoEntity";


@Entity()
export default class userEntity {
  @PrimaryGeneratedColumn()
  id!: number; 
  @Column()
  nome: string;
  @Column()
  senha: string;
  @Column()
  cpf: string;
  @OneToMany(()=> emprestimoEntity, (emprestimo) => emprestimo.usuario)
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