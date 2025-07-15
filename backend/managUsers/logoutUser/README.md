
# logoutUser Microservice

The `logoutUser` microservice is responsible for logging out users from the system, invalidating their active sessions.

## Functionality

This microservice ensures that a user is logged out of the system by invalidating their session or token.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd logoutUser
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from logoutUser import logout_user

user_data = {
    "user_id": "12345"
}
logout_status = logout_user(user_data)
print("Logout status:", logout_status)
```

## Endpoints

- **POST /logoutUser**: Logs out a user by invalidating their session.
