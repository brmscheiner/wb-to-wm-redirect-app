const express = require("express");
const app = express();
const port = 3210;

// app.get("/", function (request, response) {
//   response.set("location", "https://wildme.org/#/wildbook");
//   response.status(301).send();
// });

app.use((req, res, next) => {
  const host = req.get("Host");
  if (host) {
    return res.redirect(301, "https://wildme.org/#/wildbook");
  }
  return next();
});

app.listen(port, function () {
  console.log("Server is running on port: ", port);
});
