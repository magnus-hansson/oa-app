const data = require("../shared/db");

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");
  try {
    let items = await data.getClubs();
    context.res.status(200).json(items);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
