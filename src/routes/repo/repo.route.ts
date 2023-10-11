import { FastifyInstance } from 'fastify';

export const repoRouter = async (app: FastifyInstance) => {

  app.get("/", async function () {
    return this.orient.query("select * from Repo").all()
  })
}