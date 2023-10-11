import { FastifyInstance } from 'fastify';

export const boxRouter = async (app: FastifyInstance) => {
  app.get("/", async () => {
    return "OK"
  })
}