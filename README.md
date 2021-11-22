# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Node js version
 v12.14.0

* Database version
 10.4.8-MariaDB

* Configuration
open folder /root folder/server.js
change value from
```
var db = mysql.createPool({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'job'
});

  ``` 
  according to the installed mysql authentication

* Database creation
Create database wich name is "job"

* Database initialization
make sure you have run your mysql database

* How to run the test suite
type this command in terminal inside this root folder of application
```npm install```
run this command to run this application
```npm start```

* API 
1. Login API (you can sign up firstly in API no 4)
```
POST /api/v1/login HTTP/1.1
Host: 127.0.0.1:3000
Content-Type: application/json
Content-Length: 53

{
	"username":"gentur",
	"password":"password123"
	
}
```
2. Get job list API
```
GET /api/v1/job?page=1&limit=10&description=&location=&full_time= HTTP/1.1
Host: 127.0.0.1:3000
Content-Type: application/json
Content-Length: 23

{
	"my_user_id":"1"
	
}
```
3. Get job detail API
```
GET /api/v1/job/32bf67e5-4971-47ce-985c-44b6b3860cdb HTTP/1.1
Host: 127.0.0.1:3000
```
4. sign up
```
POST /api/v1/signup HTTP/1.1
Host: 127.0.0.1:3000
Content-Type: application/json
Content-Length: 88

{
	"username":"gentur",
	"email":"gentur.ariya@gmail.com",
	"password":"password123"
	
}
```
or you can import this collection to your postman ```https://www.getpostman.com/collections/267e7d1c45adecd6bbc0```
in postman: click import, click tab link paste url above to text box, then click continue
