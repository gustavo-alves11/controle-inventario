import { Repository } from "typeorm";
import RetiradaEntity from "../entities/RetiradaEntity";
import InterfaceRetiradaRepository from "./Interfaces/InterfaceRetiradaRepository";

export default class RetiradaRepository implements InterfaceRetiradaRepository {
  constructor(private repository: Repository<RetiradaEntity>) {}

async listaRetiradaPorId(id: number): Promise<{ success: boolean; message?: string; }>  {
    try {
        await this.repository.findOne({ where: { id } });
    } catch (error) {
        console.log(error);
    return {
    success: false,
    message: "Ocorreu um erro ao tentar buscar a retirada.",
    };
    }
}

  criaRetirada(retirada: RetiradaEntity): void | Promise<void> {  // a var retirada recebida
    this.repository.save(retirada);
  }
  async listaRetiradas(): Promise<RetiradaEntity[]> {
    return await this.repository.find();
  }
  async atualizaRetirada(
    id: number,
    newData: RetiradaEntity
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const retiradaToUpdate = await this.repository.findOne({ where: { id } });

      if (!retiradaToUpdate) {
        return { success: false, message: "retirada não encontrada" };
      }

      Object.assign(retiradaToUpdate, newData);

      await this.repository.save(retiradaToUpdate);

      return { success: true };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Ocorreu um erro ao tentar atualizar a retirada.",
      };
    }
  }

  async deletaRetirada(
    id: number
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const retiradaToRemove = await this.repository.findOne({ where: { id } });

      if (!retiradaToRemove) {
        return { success: false, message: "retirada não encontrada" };
      }

      await this.repository.remove(retiradaToRemove);

      return { success: true };
    } catch (error) {
        console.log(error)
      // Se ocorrer um erro inesperado, você pode retornar uma mensagem genérica ou personalizada.
      return {
        success: false,
        message: "Ocorreu um erro ao tentar excluir a retirada.",
      };
    }
  }

}
