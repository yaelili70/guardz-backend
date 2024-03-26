## Description
The server side to the Guardz Client

## Installation
install and run mongo in your computer (the backend need to connect to the db)
and then run: 
```bash
$ npm install
```

## Running the app
```bash
npm run dev
```

## Requests
* Get: /users - return all users (username, firstName, lastName, age, createdAt)
* Get: /users/:username - return all users with the specific username (I didn't use it, just wrote it to have an extra path)
* Post /users - add new user (username, firstName, lastName, age)

## Comments
The server is running on a container named server-container.
Here is the list of the containers:
![image](https://github.com/yaelili70/guardz-backend/assets/52917225/4c22f2d0-9da0-4651-87a2-0b4a0128b25b)
(the client container doesnt work well, I wrote more on its repository)

an example to a request:
http://localhost:8080/users
![image](https://github.com/yaelili70/guardz-backend/assets/52917225/2ad8fa99-8d0e-4c65-bd14-ef4762ea45a7)



