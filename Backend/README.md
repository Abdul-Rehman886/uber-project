# Backend API Documentation

# User API Documentation

## Endpoints

### POST /users/register

#### Description
This endpoint is used to register a new user.

#### Request Body
The request body should be a JSON object with the following fields:
- `fullname` (object):
- `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- ` lastname` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the user. Must be a valid email format and at least 5 characters long.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

### Example Response
- `user` (object): 
- `fullname` (object):
- `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- `lastname` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the user. Must be a valid email format and at least 5 characters long.
- `password` (string, required): The password for the user. Must be at least 6 characters long.
- `token` (string): JWT Token for the user.

## Endpoints

### POST /users/login

#### Description
This endpoint authenticates a user using their email and password and returns a JWT token.

#### Request Body
The request body should be a JSON object with the following fields:
- `email` (string, required): The email address of the user
- `password` (string, required): The password for the user. Must be at least 6 characters long

#### Example Request
- `user` (object): 
- `fullname` (object):
- `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- `lastname` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the user. Must be a valid email format and at least 5 characters long.
- `password` (string, required): The password for the user. Must be at least 6 characters long.
- `token` (string): JWT Token for the user.

## Endpoints

### GET /users/profile

#### Description
Retrieves the profile information of the authenticated user.

#### Authentication
- `Authorization`: Bearer token required (JWT token received after login)

#### Example Request
- `fullname` (object):
- `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- `lastname` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the user. Must be a valid email format and at least 5 characters long.

## Endpoints

### GET /users/logout

#### Description
Logout the current user and blacklist the token provided in headers or cookies.

#### Authentication
Requires a valid  JWT token in the Authorization header or cookie.

# Captain API Documentation

## Endpoints

### POST /captains/register

#### Description
This endpoint is used to register a new captain.

#### Request Body
The request body should be a JSON object with the following fields:
- `fullname` (object):
- `firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
- ` lastname` (string, optional): The last name of the captain. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the captain. Must be a valid email format and at least 5 characters long.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.
- `vehicle` (object):
- `color` (string, required): Vehicle color. Must be at least 3 characters long.
- ` plate` (string, optional): Vehicle plate. Must be at least 3 characters long.
- `capaciy` (number, required): Vehicle passenger capaciy. Must be atleast 1.
- `vehicleType` (string, required): The type of vehicle.

### Example Response
- `captain` (object): 
- `fullname` (object):
- `firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
- `lastname` (string, optional): The last name of the captain. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the captain. Must be a valid email format and at least 5 characters long.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.
- `vehicle` (object):
- `color` (string, required): Vehicle color. Must be at least 3 characters long.
- ` plate` (string, optional): Vehicle plate. Must be at least 3 characters long.
- `capaciy` (number, required): Vehicle passenger capaciy. Must be atleast 1.
- `vehicleType` (string, required): The type of vehicle.
- `token` (string): JWT Token for the captain.

## Endpoints

### POST /captains/login

#### Description
This endpoint authenticates a captain using their email and password and returns a JWT token.

#### Request Body
The request body should be a JSON object with the following fields:
- `email` (string, required): The email address of the captain
- `password` (string, required): The password for the captain. Must be at least 6 characters long

#### Example Request
- `captain` (object): 
- `fullname` (object):
- `firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
- `lastname` (string, optional): The last name of the captain. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the captain. Must be a valid email format and at least 5 characters long.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.
- `vehicle` (object):
- `color` (string, required): Vehicle color. Must be at least 3 characters long.
- ` plate` (string, optional): Vehicle plate. Must be at least 3 characters long.
- `capaciy` (number, required): Vehicle passenger capaciy. Must be atleast 1.
- `vehicleType` (string, required): The type of vehicle.
- `status` (string, required): Tells the status of the captain.
- `token` (string): JWT Token for the captain.

## Endpoints

### GET /captains/profile

#### Description
Retrieves the profile information of the authenticated captain.

#### Authentication
- `Authorization`: Bearer token required (JWT token received after login)

#### Example Request
- `fullname` (object):
- `firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
- `lastname` (string, optional): The last name of the captain. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the captain. Must be a valid email format and at least 5 characters long.
- `vehicle` (object):
- `color` (string, required): Vehicle color. Must be at least 3 characters long.
- ` plate` (string, optional): Vehicle plate. Must be at least 3 characters long.
- `capaciy` (number, required): Vehicle passenger capaciy. Must be atleast 1.
- `vehicleType` (string, required): The type of vehicle.
- `status` (string, required): Tells the status of the captain.

## Endpoints

### GET /captains/logout

#### Description
Logout the current captain and blacklist the token provided in headers or cookies.

#### Authentication
Requires a valid  JWT token in the Authorization header or cookie.