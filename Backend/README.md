# Backend API Documentation

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