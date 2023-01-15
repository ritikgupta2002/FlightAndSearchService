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
  execute `npx sequelize db:create`


