const express = require("express");
const router = require("./controllers/guestbookRoutes");
const app = express();

const path = require("path");
const public = path.join(__dirname, "public");
app.use(express.static(public));

app.use("/", router);

app.listen(3000, () => {
  console.log("Server started on port 3000. Ctrl^C to quit.");
});
