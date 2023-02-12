#  Welcome to Flights Service

## Project Setup 
1. clone the project on your local machine 
2. Execute ` npm install ` on the same path as of your root directory of the downloaded project  
3. Create a new `.env ` file in the root directory and add the following environment variable 
      - `PORT=3000`
4. Inside the `src/config` folder create a new file `config.json` and add the following piece of json 

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
5. Once you have addded your db config as listed above , go to the src folder from your terminal 
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

## Tables

 1.  City Table 
      - City->id , name , created_at , updated_at 
 2.  Airport Table
      - Airport->id , name , address , city_id , created_at , updated_at  
      Relationship -> City has many airports and Airport belongs to a city (one to many)
      


