
# verifyMailLogin Microservice

The `verifyMailLogin` microservice is responsible for verifying email login attempts to ensure that they are valid and authorized.

## Functionality

This microservice checks the validity of an email login attempt, ensuring that the login credentials match the stored records.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd verifyMailLogin
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from verifyMailLogin import verify_login

login_data = {
    "email": "user@example.com",
    "password": "securePassword123"
}
is_valid = verify_login(login_data)
print("Login valid:", is_valid)
```

## Endpoints

- **POST /verifyMailLogin**: Verifies if the email login attempt is valid.
