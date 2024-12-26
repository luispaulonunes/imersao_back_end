import express from "express";
import { listarPosts } from "../controller/postsController.js";

const routes = (app) => {
    // Habilita o parsing de JSON no corpo das requisições
    app.use(express.json());

    app.get("/posts", listarPosts);
    // Rota para obter todos os posts
    //app.get("/posts", async (req, res) =>{
        // Chama a função para obter os posts
        //const posts = await getTodosPosts()
        // Envia os posts como resposta em formato JSON com status 200 (sucesso)
       // res.status(200).json(listarPosts);
    //});
    
}

export default routes;

 