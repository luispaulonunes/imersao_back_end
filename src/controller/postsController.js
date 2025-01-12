// Importa funções do arquivo de modelo de posts e o módulo fs para manipulação de arquivos
import { getTodosPosts, criarPost } from "../models/postsModel.js";
import fs from "fs";

// Função para listar todos os posts
export async function listarPosts(req, res) {
  // Chama a função do modelo para obter todos os posts
  const posts = await getTodosPosts();
  
  // Retorna os posts no formato JSON com status 200 (sucesso)
  res.status(200).json(posts);
}

// Função para criar um novo post
export async function postarNovoPost(req, res) {
  // O conteúdo do novo post é obtido do corpo da requisição (req.body)
  const novoPost = req.body;

  try {
    // Chama a função do modelo para criar o post no banco de dados
    const postCriado = await criarPost(novoPost);

    // Código comentado para renomear a imagem (caso o post tenha imagem associada)
    // const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
    // fs.renameSync(req.file.path, imagemAtualizada);

    // Retorna o post criado no formato JSON com status 200 (sucesso)
    res.status(200).json(postCriado);
  } catch (erro) {
    // Exibe o erro no console para depuração
    console.error(erro.message);

    // Retorna um erro 500 (erro do servidor) no formato JSON com uma mensagem
    res.status(500).json({ "Erro": "Falha na requisicao" });
  }
}

// Função para criar um post com upload de imagem
export async function uploadImagem(req, res) {
  // Cria um objeto para o novo post com informações da imagem
  const novoPost = {
    descricao: "", // Descrição inicial vazia
    imgUrl: req.file.originalname, // Nome original do arquivo enviado
    alt: "" // Texto alternativo inicial vazio
  };

  try {
    // Chama a função do modelo para criar o post no banco de dados
    const postCriado = await criarPost(novoPost);

    // Gera o caminho do arquivo renomeado com o ID do post
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;

    // Renomeia o arquivo enviado para o caminho gerado
    fs.renameSync(req.file.path, imagemAtualizada);

    // Retorna o post criado no formato JSON com status 200 (sucesso)
    res.status(200).json(postCriado);
  } catch (erro) {
    // Exibe o erro no console para depuração
    console.error(erro.message);

    // Retorna um erro 500 (erro do servidor) no formato JSON com uma mensagem
    res.status(500).json({ "Erro": "Falha na requisicao" });
  }
}
