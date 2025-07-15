
# updateUser Microservice

The `updateUser` microservice handles updating user-related email information.

## Functionality

This microservice allows users to update their own email-related information, such as preferences and communication settings.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd updateUser
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from updateUser import update_user_email

user_data = {
    "user_id": "98765",
    "new_email": "usernew@example.com"
}
update_user_email(user_data)
```

## Endpoints

- **PUT /updateUser**: Updates the email information of a user.
