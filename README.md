### Api Contact List

A basic server built with Node.js and Express.js to manage a contact list. It provides endpoints to create, list, and delete contacts. The server uses Helmet for security.

### Prerequisites
- Node.js (12+)
- npm

### Endpoints
### Create Contact
- URL: /contact
- Method: `POST`
- Body Parameters: name (string, minimum 2 characters)

### List Contacts
URL: /contacts
Method: `GET`

### Delete Contact
- URL: /contact
- Method: `DELETE`
- Query Parameters: name (string)

### Project Structure
- `index.ts`: Starts the server and configures middlewares.
- `routes/index.ts`: Defines routes and handlers.
- `services/contact.ts`: Manages contacts (reading and writing to list.txt).
