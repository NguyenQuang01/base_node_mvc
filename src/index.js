const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4001;
const routerAccount = require("./router/apiLogin.js");
const routerEmail = require("./router/apiMail.js");
const router2 = require("./router/apiLogin.js");
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
//cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use("/v1/", [routerAccount, routerEmail]);
app.use("/v2/", router2);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
