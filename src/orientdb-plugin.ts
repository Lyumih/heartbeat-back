import fp from 'fastify-plugin'
import { FastifyPluginAsync } from 'fastify'
import { ODatabaseSession, OrientDBClient } from 'orientjs';

declare module 'fastify' {
  interface FastifyInstance {
    orient:  ODatabaseSession
  }
}


const fastifyOrient: FastifyPluginAsync = async (fastify, options) => {
  const client = await OrientDBClient.connect({
    host: "localhost",
    port: 2424
  })

  const session = await client.session({ name: "test", username: "root", password: "root" })

  fastify.decorate('orient', session);
  fastify.addHook('onClose', () => {
    console.log("CLoSE Plugin")
    session.close()
    client.close()
  })
  // }

}

export default fp(fastifyOrient, { name: 'fastify-orient' })