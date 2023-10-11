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

  app.addHook('preHandler', function (req, reply, done) {
    // @ts-ignore
    req.user = 'Bob Dylan'
    done()
  })


  app.get('/test', async function(req, res) {
    // @ts-ignore
    console.log(req.orient)
    // @ts-ignore
    console.log(req['fastify-orient'])
    // @ts-ignore
    console.log(res.ttt)
    // console.log(req)
    // @ts-ignore
    console.log('user',req.user, res.user)
    // @ts-ignore
    console.log(666,this)
    console.log(666,this.orient)
    return '123'
  })

  // @ts-ignore
  console.log('or', fastify.ttt)

  app.decorate('conf', {
    db: 'some.db',
    port: 3000
  })

  // @ts-ignore
  console.log(app.conf.db)



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