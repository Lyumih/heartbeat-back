import { FastifyInstance } from 'fastify';
import articleController from './article.controller';

const articleRouter = async (app: FastifyInstance) => {

  app.get("/", articleController.handleGetArticle)

}

export default articleRouter