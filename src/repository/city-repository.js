const { Op } = require("sequelize");
const { City } = require("../models/index"); //going to return a db obj which has all the models

class CityRepository {
  async createCity(cityName) {
    try {
      const city = await City.create({
        name: cityName.name,
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
      //the below object also works but will not return updated object
      //if we are using pg then returning : true can be used , else not

      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });

      //for getting the updated data in mysql we use the below approach

      const city = await City.findByPk(cityId); //returns the obj
      city.name = data.name;
      await city.save();
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

  async getAllCities(filter) {
    //filter can be empty also
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
