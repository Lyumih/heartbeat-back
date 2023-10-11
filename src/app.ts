import fastify, { FastifyServerOptions } from "fastify";
import 'dotenv/config'
import fp from 'fastify-plugin'

import { boxRouter, repoRouter } from './routes';
import cors from '@fastify/cors'
import { orientRouter } from './routes/orient/orient';
import { OrientDBClient } from 'orientjs';
import fastifyOrient from './orientdb-plugin';

// const setupDb = async () => {

// }

declare module 'fastify' {
  interface FastifyInstance {
    orient: {
      hello: string
    }
    fff: number
  }
}


const App = (options: FastifyServerOptions) => {
  const app = fastify(options)

  app.register(cors)
  app.register(fastifyOrient)

  // @ts-ignore
  console.log('Plug APP',app.orient)
  console.log(fastifyOrient)

  app.get("/ping", async () => "SERVER");

  app.decorate('fff', 42)

  app.register( fp((fastify, options, done) => {
    fastify.decorate('ttt', () => 'ttt123')
    done()
  }))


  app.get('/test', async (fastify, req) => {
    // @ts-ignore
    console.log(fastify.orient)
    // @ts-ignore
    console.log(fastify['fastify-orient'])
    // @ts-ignore
    console.log(fastify.ttt)
    // console.log(fastify.fff)
    return '123'
  })

  // OrientDBClient.connect({
  //   host: "localhost",
  //   port: 2424
  // }).then(client => {
  //   let session = client.session({ name: "test", username: "root", password: "root" });
  //   session.query("select from OUser where name = :name", { params : {name: "admin" }})
  //   .all()
  //   .then((results)=> {
  //       console.log(results);
  //   });
  //   return client.close();
  // }).then(()=> {
  //   console.log("Client closed");
  // });

  // app.register(repoRouter, { prefix: "/api/v1/repo" })
  // app.register(boxRouter, { prefix: "/api/v1/box" })
  app.register(orientRouter, { prefix: "/api/v1/orient"})

  return app
}

export default App