const express = require("express");
const server = express();
const {connectToDatabase} = require("./MongoDB/db")


const tasks = require("./Router/tasks");
const port = 3000;

server.use("/api/v1/tasks",tasks);
server.use(express.json());

connectToDatabase()
    .then(() => {
        console.log("Database connection successful");

        server.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    })
    .catch((error) => {
        console.log("Database connection error:", error);
    });
