const express = require("express");
const { PORT } = require("./config/ServerConfig");
const SetupAndStartServer = async () => {
  //creating express object
  const app = express();
  app.listen(PORT, () => {
    console.log(`Server started at Port ${PORT}`);
  });
};
SetupAndStartServer();
