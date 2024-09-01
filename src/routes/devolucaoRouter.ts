import express from "express";
import { AppDataSource } from "../config/dataSource";
const router = express.Router();
const petRepository = new PetRepository(
  AppDataSource.getRepository("PetEntity"),
  AppDataSource.getRepository("AdotanteEntity")
);
const devolucaoController = new DevolucaoController(petRepository);

//router.post("/", (req, res) => petController.criaPet(req, res));


export default router;
