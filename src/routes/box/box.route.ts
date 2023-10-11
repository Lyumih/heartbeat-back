import { FastifyInstance } from 'fastify';

export const boxRouter = async (app: FastifyInstance) => {
  app.get("/", function () {
    return this.orient.query('select * from Box').all()
  })
}