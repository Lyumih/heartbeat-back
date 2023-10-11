import fp from 'fastify-plugin'
import {FastifyInstance, FastifyPluginAsync} from 'fastify'
import { OrientDBClient } from 'orientjs';

declare module 'fastify' {
  interface FastifyInstance {
    orient: {
      hello: string
    }
  }
}


const fastifyOrient: FastifyPluginAsync = async (fastify, options) => {
  // const client = await OrientDBClient.connect({
  //   host: "localhost",
  //   port: 2424
  // })
  // @ts-ignore
  // if (!fastify.orient) {
    // fastify.decorate('orient', new OrientDBClient());
  fastify.decorate('orient', { hello: 'world' });

  console.log('Decorated', fastify.orient)
  console.log(options)
  fastify.addHook('onClose', () => {
    console.log("CLoSE Plugin")
  })
  // }

}

export default fp(fastifyOrient, { name: 'fastify-orient' })