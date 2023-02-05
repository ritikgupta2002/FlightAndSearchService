const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository(); //binding the object with the cityservice class .
  }
  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      //inside the cityservice class if we want to use the property of the cityservice then we have to use this.property
      // syntax like we did here ,outside the class if we want to make use of the property of the class
      //then we have to use like first create a object of the CityServie class then obj.property.
      return city;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }

  async updateCity(cityId,data) {
    try {
      const city = await this.cityRepository.updateCity(cityId,data);
      return city;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }
}

module.exports = CityService;
