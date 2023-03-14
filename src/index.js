const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/ServerConfig");
const ApiRoutes = require("./routes/index"); //you get router

const db = require("./models/index");
// const { Airplane, City, Airport } = require("./models/index");

const SetupAndStartServer = async () => {
  //creating express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes); //mapping with Apiroutes

  app.listen(PORT, async () => {
    console.log(`Server started at Port ${PORT}`);
    
    // if( process.env.SYNC_DB) {

    //   //if the env file have SYNC_DB property then only synchronize the db otherwise dont synchronize
    //   db.sequelize.sync({ alter: true }); //never write force:true it will delete all data of all the tables .
    // }
  });
};
SetupAndStartServer();
