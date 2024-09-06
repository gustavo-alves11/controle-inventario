/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, Response } from "express";
import { TipoRequestBodyDevolucao, TipoRequestParamsDevolucao, TipoResponseBodyDevolucao } from "../types/TipoDevolucao";
import DevolucaoRepository from "../repositories/DevolucaoRepository";
import DevolucaoEntity from "../entities/DevolucaoEntity";

export default class AdminController {
  constructor(private repository: DevolucaoRepository) {} //instancia o repository para executar metodos no db
  async criaDevolucao(req: Request<TipoRequestParamsDevolucao, {}, TipoRequestBodyDevolucao>, res: Response<TipoResponseBodyDevolucao>) 
  {
    const { data } = <DevolucaoEntity>(req.body); // pega a data do body
    
    const novaDevolucao = new DevolucaoEntity(data); // cria uma nova instancia da Entity 
    
    await this.repository.criaDevolucao(novaDevolucao);  // cria um novo registro no banco
    return res
      .status(201)
      .json({ data: { id: novaDevolucao.id, data} }); // a entity que criou o id, portanto temos que pegar do objeto instanciado 
  }


}
