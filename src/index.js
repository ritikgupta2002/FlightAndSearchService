const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/ServerConfig");
const CityRepository = require("./repository/city-repository");

const SetupAndStartServer = async () => {
  //creating express object
  const app = express();

  const jsonParser = app.use(bodyParser.json);
  const urlendcodedParser = app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server started at Port ${PORT}`);
    const repo = new CityRepository();
    repo.createCity({name:"New Delhi "});
  });
};
SetupAndStartServer();
