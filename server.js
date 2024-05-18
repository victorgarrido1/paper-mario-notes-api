const express = require("express");
const db = require("./config/connection");
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

db.once("open",() => {
    app.listen(PORT, () => {
        console.log(`The server is listening on ${PORT}`);
    })
})