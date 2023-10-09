import { FastifyInstance } from 'fastify';
import repoController from './repo.controller';

const repoRouter = async (app: FastifyInstance) => {

  app.get("/", repoController.handleGetRepo)

}

export default repoRouter