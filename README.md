Express - NodeJS Framework

Web Application (API Development)



express.Router() - to handle different routes in express application



app.listen - http.server.listen - listen all requests on this port
app.use - Introduce middleware
app.get - to handle HTTP GET method - REST GET
app.router - direct to specific page




router.get - same as app.get but on different route
router.param - to access parameters of url route
router.route - to direct to some specific page
router.use - same as app.use




req.body - to access data passed with api
req.params - url parameter of the request
req.query - to handle all query parameters
req.ip - to access request ip
req.method - access type of request
req.query - handle query parameters of the url
req.path - to access complete path
req.protocol - to access http type




res.send - return data of any type
res.sendFile - to send file as response
res.append - add data on send part
res.json - to return json data
res.status - return status code
res.end - send and end the tunnel
res.status - return http status code


templating
middleware
database





cluster -> project -> database -> table

user - userid and password

user - access on  database


Online MongoDB Atlas - 
https://www.mongodb.com/atlas/database
https://cloud.mongodb.com/


Mongoose commands
mongoose.connect - connect database
schmea - save - insert into table
        find - retrieve from table



------------------------------------------------------
---------------------------------------------------
---------------------------------------------------
List of API




POST add product - - *****http://localhost:4000/products/
GET - *****http://localhost:4000/products
        *****http://localhost:4000/products/categoryname - to build
        *****http://localhost:4000/products/id123
        http://localhost:4000/products/searchProduct?price=2000
DELETE - http://localhost:4000/products/id123
PUT - http://localhost:4000/products/updatePrice


POST - USER




SignUp
Login
POST - user registration
GET - user login check


Registration - POST - add user
User Login - GET(details)
Auth0/JWT



Cart 
POST - add to cart
PUT - update cart
DELETE - clear cart
GET - list of all products in cart



Orders
POST - create order
GET - list of orders
GET - details of the order



Tables
products
category and subcategory
users
cart - cart and cartdetails
orders - orders and orderdetails
---------------------------------------------------
---------------------------------------------------
---------------------------------------------------
SQL - 
INSERT INTO tablename (FIELDS) VALUES
SELECT * (PRODUCTID, PRODUCTNAME) FROM tablename WHERE productid = id123



Structured
Oracle, MS SQL, MySQL, Postgres, RDS


Non Structured
Mongodb, Cassandra, DynamoDB