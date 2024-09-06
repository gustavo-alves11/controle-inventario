import { Repository } from "typeorm";
import ProdutoEntity from "../entities/ProdutoEntity";
import InterfaceProdutoRepository from "./Interfaces/InterfaceProdutosRepository";

export default class ProdutoRepository implements InterfaceProdutoRepository {
  constructor(private repository: Repository<ProdutoEntity>) {}
  

async listaProdutoPorId(id: number): Promise<{ success: boolean; message?: string; }>  {
    try {
        await this.repository.findOne({ where: { id } });
    } catch (error) {
        console.log(error);
    return {
    success: false,
    message: "Ocorreu um erro ao tentar buscar o produto.",
    };
    }
}

  criaProduto(produto: ProdutoEntity): void | Promise<void> {  // a var produto recebida
    this.repository.save(produto);
  }
  async listaProdutos(): Promise<ProdutoEntity[]> {
    return await this.repository.find();
  }
  async atualizaProduto(
    id: number,
    newData: ProdutoEntity
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const produtoToUpdate = await this.repository.findOne({ where: { id } });

      if (!produtoToUpdate) {
        return { success: false, message: "produto não encontrado" };
      }

      Object.assign(produtoToUpdate, newData);

      await this.repository.save(produtoToUpdate);

      return { success: true };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Ocorreu um erro ao tentar atualizar o produto.",
      };
    }
  }

  async deletaProduto(
    id: number
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const produtoToRemove = await this.repository.findOne({ where: { id } });

      if (!produtoToRemove) {
        return { success: false, message: "produto não encontrado" };
      }

      await this.repository.remove(produtoToRemove);

      return { success: true };
    } catch (error) {
        console.log(error)
      // Se ocorrer um erro inesperado, você pode retornar uma mensagem genérica ou personalizada.
      return {
        success: false,
        message: "Ocorreu um erro ao tentar excluir o produto.",
      };
    }
  }

}
