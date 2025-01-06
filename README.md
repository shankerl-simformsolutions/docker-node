# Deploy Nodejs project using Docker

## After successfully connecting github to remote server follow this commands

# use following command to run the docker compose 
docker-compose up

# Following the routes are used to connect postgres db and perform actions on DB

# set up (http://localhost:3001/api/setup) (GET)
Set up the table for the user creation and perform CRUD on user

# add user (http://localhost:3001/api/addUser) (POST)
Required parameter 
{
    "name": "shnaker3 lohar3",
    "email": "shanker3.l@email.com"
}

# get user (http://localhost:3001/api/getUser) (GET)
To get the all users from the table
