var http = require('http');
var express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');
var db = require("./server/database/db");
var authApi = require("./server/routes/authApi");
var usersApi = require("./server/routes/userApi");
var questionApi = require("./server/routes/questionApi");


const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/users", usersApi);
app.use("/auth", authApi);
app.use("/question", questionApi);




const server = http.createServer(app);


server.listen(port, () => {
    console.log("server is running in port :", port)
});
