# formaly (Twitter) X  Application clone

## Overview

This project is a Twitter (X) application designed to manage users, tweets, and comments. It includes features for user authentication, creating and managing tweets, and commenting on tweets or other comments. The application is built using Node.js, Express.js, and MongoDB, with Mongoose as the ORM. Authentication is handled using Passport.js and JWT.

## Features

- **User Management**: 
  - Sign up new users.
  - Log in users and generate JWT tokens.
  - Secure API endpoints with JWT authentication.
  
- **Tweet Management**:
  - Create, read, update, and delete tweets.
  - Associate comments with tweets.

- **Comment Management**:
  - Create, read, update, and delete comments.
  - Associate comments with other comments (nested comments).

## Tech Stack

- **Node.js**: JavaScript runtime for building the server-side of the application.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user data, tweets, and comments.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Passport.js**: Middleware for handling authentication.
- **JWT (JSON Web Tokens)**: Used for secure token-based authentication.
- **bcrypt**: Library for hashing and comparing passwords.
- **JavaScript**: The programming language used throughout the project.

## Project Structure


## Models

### User Model
- **Fields**:
  - `email`: User's email address (string, unique, required).
  - `password`: User's password, stored as a hashed value (string, required).
  - `name`: User's display name (string, required).
- **Methods**:
  - `comparePassword(password)`: Compares a plain text password with the hashed password.
  - `genJwt()`: Generates a JWT token for the user.

### Tweet Model
- **Fields**:
  - `content`: The content of the tweet (string, required).
  - `userId`: Reference to the user who created the tweet (ObjectId, ref: User, required).
  - `likes`: Array of ObjectIds referencing users who liked the tweet (Array of ObjectIds, ref: User).
  - `comments`: Array of ObjectIds referencing comments associated with the tweet (Array of ObjectIds, ref: Comment).

### Comment Model
- **Fields**:
  - `content`: The content of the comment (string, required).
  - `userId`: Reference to the user who created the comment (ObjectId, ref: User, required).
  - `onModel`: The type of model the comment is associated with (either 'Tweet' or 'Comment').
  - `commentable`: Reference to the model (Tweet or Comment) the comment is associated with (ObjectId, refPath: 'onModel', required).
  - `comments`: Array of ObjectIds referencing nested comments (Array of ObjectIds, ref: Comment).

## API Endpoints

### User Endpoints
- **POST /signup**
  - Creates a new user.
  - **Request Body**:
    ```json
    {
      "email": "user@example.com",
      "password": "password123",
      "name": "User Name"
    }
    ```
  - **Response**: `201 Created` with the user object.

- **POST /login**
  - Logs in a user and returns a JWT token.
  - **Request Body**:
    ```json
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```
  - **Response**: `200 OK` with the JWT token.

### Tweet Endpoints
- **POST /tweets**
  - Creates a new tweet (requires JWT authentication).
  - **Request Body**:
    ```json
    {
      "content": "This is my first tweet!"
    }
    ```
  - **Response**: `201 Created` with the tweet object.

- **GET /tweets/:id**
  - Retrieves a specific tweet by ID.

- **DELETE /tweets/:id**
  - Deletes a tweet by ID (requires JWT authentication).

### Comment Endpoints
- **POST /comments**
  - Creates a new comment (requires JWT authentication).
  - **Request Body**:
    ```json
    {
      "modelId": "tweetOrCommentId",
      "modelType": "Tweet" | "Comment",
      "content": "This is a comment!"
    }
    ```
  - **Response**: `201 Created` with the comment object.

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repository.git


```bash npm install```

2. **Run the Application**:

```bash npm start```



### Authentication
**JWT Authentication**: This application uses JWT for authentication. The token is generated upon login and should be included in the Authorization header as a Bearer token for accessing protected routes.

authorization: Bearer <your-jwt-token>
