
# updateOneUser Microservice

The `updateOneUser` microservice is responsible for updating the information of a single user in the system.

## Functionality

This microservice allows updating a user's information, such as their name, email, or other details, based on their user ID.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd updateOneUser
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from updateOneUser import update_user_info

user_data = {
    "user_id": "12345",
    "new_email": "newemail@example.com"
}
update_user_info(user_data)
```

## Endpoints

- **PUT /updateOneUser**: Updates the information of a single user.
