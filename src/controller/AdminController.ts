/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, Response } from "express";
import { TipoRequestBodyAdmin, TipoRequestParamsAdmin, TipoResponseBodyAdmin } from "../types/TipoAdmin";
import AdminRepository from "../repositories/AdminRepository";
import AdminEntity from "../entities/AdminEntity";

export default class AdminController {
  constructor(private repository: AdminRepository) {}
  async criaAdmin(req: Request<TipoRequestParamsAdmin, {}, TipoRequestBodyAdmin>, res: Response<TipoResponseBodyAdmin>) 
  {
    const { nome, cpf, senha } = <AdminEntity>(req.body);
    
    const novoAdmin = new AdminEntity(nome, cpf, senha);
    
    await this.repository.criaAdmin(novoAdmin);
    return res
      .status(201)
      .json({ data: { id: novoAdmin.id, nome, cpf} });
  }

  async listaAdmin(req: Request<TipoRequestParamsAdmin, {}, TipoRequestBodyAdmin>, res: Response<TipoResponseBodyAdmin>) {
    const listaDeAdmins = await this.repository.listaAdmins();
    const data = listaDeAdmins.map((Admin) => {
      return {
        id: Admin.id,
        nome: Admin.nome,
        cpf: Admin.cpf,

      };
    });
    return res.status(200).json({ data });
  }

  async atualizaAdmin(
    req: Request<TipoRequestParamsAdmin, {}, TipoRequestBodyAdmin>,
    res: Response<TipoResponseBodyAdmin>
  ) {
    const { id } = req.params;
    const { success, message } = await this.repository.atualizaAdmin(
      Number(id),
      req.body as AdminEntity
    );

    if (!success) {
      return res.status(404).json({ error: message });
    }
    return res.sendStatus(204);
  }

  async deletaAdmin(
    req: Request<TipoRequestParamsAdmin, {}, TipoRequestBodyAdmin>,
    res: Response<TipoResponseBodyAdmin>
  ) {
    const { id } = req.params;

    const { success, message } = await this.repository.deletaAdmin(Number(id));

    if (!success) {
      return res.status(404).json({ error: message });
    }
    return res.sendStatus(204);
  }

}
