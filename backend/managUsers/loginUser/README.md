
# loginUser Microservice

The `loginUser` microservice is responsible for handling the login process for users, verifying their credentials and authenticating them.

## Functionality

This microservice accepts a user's credentials (email/username and password) and verifies them against stored records to authenticate the user.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd loginUser
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from loginUser import login_user

credentials = {
    "email": "user@example.com",
    "password": "securePassword123"
}
login_status = login_user(credentials)
print("Login status:", login_status)
```

## Endpoints

- **POST /loginUser**: Authenticates a user based on their credentials.
