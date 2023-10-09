import { FastifyInstance } from 'fastify';
import { handleGetBox } from './box.controller';

export const boxRouter = async (app: FastifyInstance) => {
  app.get("/", async () => handleGetBox())
}