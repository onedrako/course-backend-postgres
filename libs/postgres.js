const {Client} = require("pg")

const getConnection = async () => {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "user",
    password: "user1234",
    database: "my_store"
  })
  await client.connect()
  return client
}

module.exports = getConnection
