import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Importa a função para conectar ao banco de dados
//import conectarAoBanco from "./src/config/dbConfig.js";

    // Conecta ao banco de dados usando a string de conexão fornecida como variável de ambiente
    //const conexao =  await conectarAoBanco(process.env.STRING_CONEXAO)

// **Observação:** A linha abaixo está comentada, mas pode ser útil para depuração
// console.log(process.env.STRING_CONEXAO)

// Array de posts de exemplo (será substituído pelos dados do banco de dados)
const posts = [
  // ... (lista de posts)
];

// Cria uma instância do Express
const app = express ();
app.use(express.static("uploads"));
routes (app);
          // Habilita o parsing de JSON no corpo das requisições
         // app.use(express.json());
// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor escutando...");
});

    // Função assíncrona para obter todos os posts do banco de dados
    //async function getTodosPosts() {
      // Obtém o banco de dados 'imersao_back_end'
     // const db = conexao.db("imersao_back_end")
      // Obtém a coleção 'posts'
     // const colecao = db.collection("posts") 
      // Retorna todos os documentos da coleção como um array
      //return colecao.find().toArray()
   // }

        // Rota para obter todos os posts
        //app.get("/posts", async (req, res) =>{
          // Chama a função para obter os posts
          //const posts = await getTodosPosts()
          // Envia os posts como resposta em formato JSON com status 200 (sucesso)
          //res.status(200).json(posts);
       // });

 // function buscarPostPorID (id) {
  //    return posts.findIndex ((post) =>{
  //        return post.id === Number (id)
  //    }
 //     ) 
  //}

  //app.get("/posts/:id", (req, res) =>{
   //   const index = buscarPostPorID (req.params.id)
  //    res.status(200).json(posts[index]);
  //});