const CrudServcie = require("./crud-service");
const { AirportRepository } = require("../repository/index");

class AirportService extends CrudServcie {
  constructor() {
    const airportRepository = new AirportRepository();
    super(airportRepository);
  }
}

module.exports = AirportService; 
