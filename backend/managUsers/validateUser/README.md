
# validateUser Microservice

The `validateUser` microservice is responsible for validating if a user exists in the system.

## Functionality

This microservice checks if a user with the given user ID or email exists in the system, verifying their identity.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd validateUser
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from validateUser import validate_user_existence

user_data = {
    "email": "user@example.com"
}
exists = validate_user_existence(user_data)
print("User exists:", exists)
```

## Endpoints

- **POST /validateUser**: Validates if a user exists in the system.
