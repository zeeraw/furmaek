express = require("express")
app = express()

app.set("view engine", "jade")
app.set("views", "./src/templates")

app.use(express.static("public"));

app.get "*", (req, res) ->
  res.render "index",
    title: "Furmaek",
    author: "Zee & Caraid"

exports.start = (callback) ->
  app.listen(7474, "0.0.0.0")
  console.log("Listening on 0.0.0.0:7474")