const CosmosClient = require("@azure/cosmos").CosmosClient;
let endpoint = process.env["endpoint"];
let key = process.env["key"];
const client = new CosmosClient({ endpoint, key });

const database = client.database("mydb");
const container = database.container("mycol");

const getClubs = async () => {
    const querySpec = {
        query: "SELECT * from c",
      };
  
      const { resources: items } = await container.items
        .query(querySpec)
        .fetchAll();

        return items
  };

  module.exports = {getClubs}