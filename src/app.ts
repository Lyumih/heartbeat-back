import fastify, { FastifyServerOptions } from "fastify";
import 'dotenv/config'

import { boxRouter, repoRouter } from './routes';
import cors from '@fastify/cors'
import fastifyOrient from './orientdb-plugin';

const App = (options: FastifyServerOptions) => {
  const app = fastify(options)

  app.register(cors)
  app.register(fastifyOrient)

  app.get("/ping", async () => "SERVER");

  app.register(repoRouter, { prefix: "/api/v1/repo" })
  app.register(boxRouter, { prefix: "/api/v1/box" })

  return app
}

export default App