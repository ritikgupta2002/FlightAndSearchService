#  Welcome to Flights Service

## Project Setup 
- clone the project on your local machine 
- Execute ` npm install ` on the same path as of your root directory of the downloaded project  
- Create a new `.env ` file in the root directory and add the following environment variable 
		- PORT=3000
- Inside the `src/config` folder create a new file `config.json` and add the following piece of json 

```
{
  "development": {
    "username": <YOUR_DB_NAME>,
    "password": <YOUR_DB_PASS>,
    "database": "Flights_Search_DB_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- Once you have addded your db config as listed above , go to the src folder from your terminal 
execute 
    - `npx sequelize db:create`
    - `npx sequelize db:migrate` 

## DB Design
1. The database will have following tables 
    - Airplane table
    - Flight table 
    - Airport table
    - City table 
2. A flight belongs to an airplane but one airplane can be used in multiple flights 
3. A city has many airports but one airport belongs to a city 
4. One airport can have many flights but one flight of particular id can belong to only one airport 


