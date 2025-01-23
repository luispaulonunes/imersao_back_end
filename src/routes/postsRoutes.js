import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controller/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    // Habilita o parsing de JSON no corpo das requisições
    app.use(express.json());

    app.get("/posts", listarPosts);

    app.post ("/posts", postarNovoPost)
    app.post ("/upload", upload.single("imagem"), uploadImagem)
    // Rota para obter todos os posts
    //app.get("/posts", async (req, res) =>{
        // Chama a função para obter os posts
        //const posts = await getTodosPosts()
        // Envia os posts como resposta em formato JSON com status 200 (sucesso)
       // res.status(200).json(listarPosts);
    //});
    
    app.put("/upload/:id", atualizarNovoPost)
}

export default routes;

 