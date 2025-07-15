
# saveUser Microservice

The `saveUser` microservice is responsible for saving new user information to the system.

## Functionality

This microservice stores new user details, such as name, email, and other essential information, into the system.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd saveUser
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from saveUser import save_new_user

user_data = {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "securePassword123"
}
save_new_user(user_data)
```

## Endpoints

- **POST /saveUser**: Saves new user information into the system.
