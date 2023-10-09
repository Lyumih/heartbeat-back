import fastify, { FastifyServerOptions } from "fastify";
import { articleRouter } from './routes';
import cors from '@fastify/cors'

const App = (options: FastifyServerOptions) => {
  const app = fastify(options)

  app.register(cors)


  app.get("/ping", async () => "SERVER");
  app.register(articleRouter, { prefix: "/api/v1/articles" })

  app.get("/api/v1/user/me", async () => {
    return {
      user: "john",
      email: "john@gmail.com",
      id: "123",
    }
  })

  app.get("/api/v1/card/me", async () => {
    return {
      card: "1234 4321 1234 4321",
      code: '123',
      date: '10/253'
    }
  })


  app.get("/api/v1/user/me/money", async () => {
    return {
      money: 100,
    }
  })

  app.get("/api/v1/god/balance", async () => {
    return {
      gods: [
        {
          id: "1",
          name: "Капитал",
          adepts: 80,
          caravans: 80000,
        },
        {
          id: "2",
          name: "Коммунизм",
          adepts: 20,
          caravans: 20000,
        }
      ]
    }
  })

  app.get("/api/v1/skills", async () => {
    return {
      skills: [
        {
          id: "1",
          name: "Зарегистрировать карту",
          book: 'https://redoc.bankingapi.ru/client-account-info/',
          api: 'https://hackaton.bankingapi.ru/extapi/aft/clientInfo/hackathon/v1/account-consents',
          method: "POST",
          payload: {
            Data: {
              permissions: []
            }
          }
        }
      ]
    }
  })

  app.get('/api/v1/caravan/grab', async () => {
    const random = Math.random()
    return {
      grab: random > 0.5,
      random,
      money: Math.floor(random * 100)

    }
  })

  return app
}
export default App