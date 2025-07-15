
# getUser Microservice

The `getUser` microservice is responsible for retrieving user information based on a given user ID.

## Functionality

This microservice fetches user details, such as profile information, settings, and preferences, based on the user ID provided.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd getUser
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from getUser import get_user_info

user_id = "12345"
user_info = get_user_info(user_id)
print(user_info)
```

## Endpoints

- **GET /getUser/{user_id}**: Retrieves user information for a specific user ID.
