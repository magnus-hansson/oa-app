const data = require("../shared/db");

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");
  let items = await data.getClubs();
  context.res.status(200).json(items);
};
