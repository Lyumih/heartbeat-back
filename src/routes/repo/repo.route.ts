import { FastifyInstance } from 'fastify';

export const repoRouter = async (app: FastifyInstance) => {

  app.get("/", async () => {
    return "OK"
  })

}