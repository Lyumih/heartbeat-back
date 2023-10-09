import { FastifyInstance } from 'fastify';
import repoController from './repo.controller';

export const repoRouter = async (app: FastifyInstance) => {

  app.get("/", repoController.handleGetRepo)

}