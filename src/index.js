const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/ServerConfig");
const ApiRoutes= require('./routes/index');//you get router object 

const SetupAndStartServer = async () => {
  //creating express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api',ApiRoutes);//mapping with Apiroutes 

  app.listen(PORT,async() => {
    console.log(`Server started at Port ${PORT}`);
  });
};
SetupAndStartServer();
