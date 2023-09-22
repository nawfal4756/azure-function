const { app } = require("@azure/functions");

export async function handler(request, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
}

app.http("FirstFunction", {
  route: "/first-function",
  method: ["GET"],
  authlevel: "anonymous",
  handler: handler,
});

module.exports = app;
