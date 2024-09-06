import { Repository } from "typeorm";
import DevolucaoEntity from "../entities/DevolucaoEntity";
import InterfaceDevolucaoRepository from "./Interfaces/InterfaceDevolucaoRepository";

export default class DevolucaoRepository implements InterfaceDevolucaoRepository {
  constructor(private repository: Repository<DevolucaoEntity>) {}

async listaDevolucaoPorId(id: number): Promise<{ success: boolean; message?: string; }>  {
    try {
        await this.repository.findOne({ where: { id } });
    } catch (error) {
        console.log(error);
    return {
    success: false,
    message: "Ocorreu um erro ao tentar buscar a devolucao.",
    };
    }
}

  criaDevolucao(devolucao: DevolucaoEntity): void | Promise<void> {  // a var devolucao recebida
    this.repository.save(devolucao);
  }
  async listaDevolucao(): Promise<DevolucaoEntity[]> {
    return await this.repository.find();
  }
  async atualizaDevolucao(
    id: number,
    newData: DevolucaoEntity
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const devolucaoToUpdate = await this.repository.findOne({ where: { id } });

      if (!devolucaoToUpdate) {
        return { success: false, message: "devolucao não encontrada" };
      }

      Object.assign(devolucaoToUpdate, newData);

      await this.repository.save(devolucaoToUpdate);

      return { success: true };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Ocorreu um erro ao tentar atualizar a devolucao.",
      };
    }
  }

  async deletaDevolucao(
    id: number
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const devolucaoToRemove = await this.repository.findOne({ where: { id } });

      if (!devolucaoToRemove) {
        return { success: false, message: "devolucao não encontrada" };
      }

      await this.repository.remove(devolucaoToRemove);

      return { success: true };
    } catch (error) {
        console.log(error)
      // Se ocorrer um erro inesperado, você pode retornar uma mensagem genérica ou personalizada.
      return {
        success: false,
        message: "Ocorreu um erro ao tentar excluir a devolucao.",
      };
    }
  }

}
