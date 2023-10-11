const OrientDBClient = require("orientjs").OrientDBClient;

// OrientDBClient.connect({
//   host: "localhost",
//   port: 2424
// }).then(async client => {
//   const session = await client.session({ name: "test", username: "root", password: "root" })

//   console.log(session)
//   let result = await session.query("select from OUser where name = :name", { params : {name: "admin" }})
//   console.log(result)
//   // return client.close();
// }).then(() => {
//   console.log("Client closed");
// });

const main = async () => {
  const client = await OrientDBClient.connect({
    host: "localhost",
    port: 2424
  })

  const session = await client.session({ name: "test", username: "root", password: "root" })
  // console.log(session)
  // session.
  const result = await session.query('select from Repo').all()
  console.log(result)
};

main()