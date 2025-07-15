
# Account Management Microservices

This repository contains several microservices for managing accounts, including functionalities such as account creation, retrieval, updates, and validation. These microservices are designed to handle account operations in a modular and scalable way.

## Microservices Overview

### 1. **generateAccountNumber**
   - **Description**: This microservice generates a unique account number for a new account.
   - **Endpoint**: `/generateAccountNumber`
   - **Method**: `POST`
   - **Input**: None
   - **Output**: A unique account number.

### 2. **getAccount**
   - **Description**: Retrieves the details of a specific account.
   - **Endpoint**: `/getAccount/{accountId}`
   - **Method**: `GET`
   - **Input**: `accountId` (Unique identifier for the account)
   - **Output**: Account details in JSON format.

### 3. **getAccountAll**
   - **Description**: Retrieves details of all accounts in the system.
   - **Endpoint**: `/getAccountAll`
   - **Method**: `GET`
   - **Input**: None
   - **Output**: A list of all accounts in JSON format.

### 4. **getAccountByCI**
   - **Description**: Retrieves account details using a specific CI (ID) number.
   - **Endpoint**: `/getAccountByCI/{ciNumber}`
   - **Method**: `GET`
   - **Input**: `ciNumber` (A unique ID number)
   - **Output**: Account details associated with the provided CI number.

### 5. **internalTransaction**
   - **Description**: Handles internal transactions between accounts within the system.
   - **Endpoint**: `/internalTransaction`
   - **Method**: `POST`
   - **Input**: JSON object with transaction details (e.g., fromAccount, toAccount, amount)
   - **Output**: Confirmation of the transaction.

### 6. **saveAccount**
   - **Description**: Saves a new account to the system.
   - **Endpoint**: `/saveAccount`
   - **Method**: `POST`
   - **Input**: JSON object with account data (e.g., name, email, etc.)
   - **Output**: Confirmation of the account being saved.

### 7. **updateAccount**
   - **Description**: Updates the details of an existing account.
   - **Endpoint**: `/updateAccount/{accountId}`
   - **Method**: `PUT`
   - **Input**: `accountId` (The ID of the account to update), JSON object with updated data.
   - **Output**: Confirmation of the account update.

### 8. **validateNumberAccount**
   - **Description**: Validates if an account number is valid.
   - **Endpoint**: `/validateNumberAccount`
   - **Method**: `POST`
   - **Input**: Account number to be validated.
   - **Output**: Validation result (valid or invalid).

---

## Getting Started

### Prerequisites
- Node.js (or preferred language environment)
- Database setup (e.g., MongoDB, PostgreSQL)
- API gateway (optional for service orchestration)

### Installation

1. Clone this repository to your local machine.
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Configure your database and other services in the `config` directory.
4. Start each microservice by running:
   ```bash
   npm start
   ```

### Usage

Each microservice exposes a REST API. You can interact with the services via HTTP requests using tools like Postman or Curl.

Example request to retrieve an account by ID:
```bash
GET http://localhost:3000/getAccount/12345
```

