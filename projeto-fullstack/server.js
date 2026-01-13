import fastify from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();
const database = new DatabaseMemory();

// criando video com a rota de criaçao
server.post("/videos", (request, reply) => {
    const { title, description, duration } = request.body;

    database.create({
        title,
        description,
        duration,
    });

    return reply.status(201).send();
})
//buscando o video com a rota de busca
server.get("/videos", (request) => {
    const search = request.query.search;

    const videos = database.list(search);

    console.log(videos);

    return videos;
})
//atualizando o video com a rota de atualizaçao ultilizando o id ou routes params
server.put("/videos/:id", (request, reply) => {
    const videoId = request.params.id
    const { title, description, duration } = request.body;

    database.update(videoId, {
        title,
        description,
        duration,
    });

    return reply.status(204).send();
})
//deletando um video com a rota de deletaçao ultilizando o id
server.delete("/videos/:id", (request, reply) => {
    const videoId = request.params.id

    database.delete(videoId);
    return reply.status(204).send();
})

server.listen({ port: 3000, });