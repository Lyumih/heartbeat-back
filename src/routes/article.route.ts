import { FastifyInstance } from 'fastify';
import { articleController } from '../controllers';

const articleRouter = async (app: FastifyInstance) => {

  app.get("/", articleController.handleGetArticle)

}

export default articleRouter