const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config()
const connectDB = require("./config/db");
const routes = require('./routes/routes')


const app = express();

app.use(express.json());
app.use(cors());
connectDB();

app.use("/api",routes)


const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});