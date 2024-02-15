# Note-Taking Application API

## Objective

To develop a backend for a note-taking application using TypeScript, Node.js, and Express, supporting CRUD operations for notes.

## Project Description

This RESTful API facilitates creating, retrieving, updating, and deleting notes, each with a title and body.

## Setup and Run

### Prerequisites

- Node.js installed.

### Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.

### Starting the Server

Execute `npm run dev` to start the server on `localhost:3000`.

### API Documentation

You can find the API documentation using Swagger UI. After starting the server, navigate to [http://localhost:3000/api-docs/](http://localhost:3000/api-docs/) to explore the endpoints interactively.

## API Endpoints

- **POST /notes**: Create a new note.
- **GET /notes**: Retrieve all notes.
- **GET /notes/:id**: Retrieve a specific note by ID.
- **PUT /notes/:id**: Update a specific note.
- **DELETE /notes/:id**: Delete a specific note.

## Data Storage

Notes are stored using an in-memory array or a file-based solution.

## Data Validation

Validates input data for note creation and updates.

## Error Handling

Handles errors such as "note not found", providing clear feedback.
