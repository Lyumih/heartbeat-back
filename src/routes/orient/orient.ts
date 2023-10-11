import { FastifyInstance } from 'fastify';
import { OrientDBClient } from 'orientjs';



// OrientDBClient.connect({
//   host: "localhost",
//   port: 2480
// }).then(client => {
//   console.log(client)
//   client.session({ name: "test", username: "root", password: "root"})
//   console.log(client)
//   return client.close();
// }).then(()=> {
//   console.log("Client closed");
// });

const setupDB = async () => {
  let client = await OrientDBClient.connect({
    host: "localhost",
    port: 2480
  });


  // let pool = await client.sessions({ name: "test", username: "root", password: "root" });
  // let session = await pool.acquire();
  let session = await client.session({ name: "test", username: "root", password: "root" });


  // session.q
  // console.log(session)

  // console.log(await client.listDatabases())

  // try {
  //   let result = await session.query("select from Box").all();
  //   console.log(result)
  // } catch (e) {
  //   console.log("ERROR", e)
  // }
  // console.log(result)
  await session.close();
  await client.close();
  console.log("Client Closed2");
}

// client.session({ name: "test")

// client.session({ name: "test", username: "root", password: "root" })
//   .then(session => {
//     return session.close();
//   });

export const orientRouter = async (app: FastifyInstance) => {
  // setupDB()
  app.get("/", async () => {
    return {test: "test123"}
  })

}