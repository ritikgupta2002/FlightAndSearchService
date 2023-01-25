const { City } = require("../models/index"); //going to return a db obj which has all the models

class CityRepository {
  async createCity(cityName) {
    try {
      const city = await City.create({
        name: cityName,
      });
      return city;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
