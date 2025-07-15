
# newTemporaryCredentials Microservice

The `newTemporaryCredentials` microservice is responsible for sending emails with new temporary credentials to users.

## Functionality

This microservice generates new temporary credentials and sends them to users via email, typically when they request a password reset.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd newTemporaryCredentials
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from newTemporaryCredentials import send_temporary_credentials_email

user_data = {
    "email": "user@example.com",
    "temporary_password": "temporary12345"
}
send_temporary_credentials_email(user_data)
```

## Endpoints

- **POST /newTemporaryCredentials**: Sends an email with new temporary credentials to the user.
