const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const chalk = require("chalk");
const initDatabase = require("./startUp/initDatabase");
const routes = require("./routes");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", routes);

const PORT = config.get("port") ?? 8080;

if (process.env.NODE_ENV === "production") {
    app.use("/", express.static(path.join(__dirname, "client")));

    const indexPath = path.join(__dirname, "client", "index.html");

    app.get("*", (req, res) => {
        res.sendFile(indexPath);
    });
}

async function start() {
    try {
        mongoose.connection.once("open", () => {
            initDatabase();
        });
        await mongoose.connect(config.get("mongoUri"));
        app.listen(PORT, () => {
            console.log(
                chalk.green(`Server has been started on port ${PORT}...`)
            );
        });
    } catch (error) {
        console.log(chalk.red("error: ", error.message));
        process.exit(1);
    }
}

start();
