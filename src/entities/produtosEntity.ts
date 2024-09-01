import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import emprestimoEntity from "./emprestimoEntity";


@Entity()
export default class produtosEntity {
  @PrimaryGeneratedColumn()
  id!: number; 
  @Column()
  marca: string;
  @Column()
  modelo: string;
  @Column()
  descricao: string;
  @Column()
  dataDeAquisicao: Date;
  @Column()
  idInventario: number;
  @Column()
  numSerie: number;
  @OneToMany(()=> emprestimoEntity, (emprestimo) => emprestimo.produto)
  emprestimo: emprestimoEntity
  
  
  constructor(
    marca: string,
    modelo: string,
    descricao: string,
    dataDeAquisicao: Date,
    idInventario: number,
    numSerie: number
  ) {
    this.marca = marca;
    this.modelo = modelo;
    this.descricao = descricao;
    this.dataDeAquisicao = dataDeAquisicao;
    this.idInventario = idInventario;
    this.numSerie = numSerie;
 }
}
