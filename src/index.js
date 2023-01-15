const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/ServerConfig");
const SetupAndStartServer = async () => {
  //creating express object
  const app = express();

  const jsonParser=app.use(bodyParser.json);
  const urlendcodedParser=app.use(bodyParser.urlencoded({extended:true}));
  

  app.listen(PORT, () => {
    console.log(`Server started at Port ${PORT}`);
  });
};
SetupAndStartServer();
