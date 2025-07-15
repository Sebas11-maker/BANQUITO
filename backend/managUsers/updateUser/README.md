
# updateUser Microservice

The `updateUser` microservice is responsible for updating general information for a user.

## Functionality

This microservice allows users to update their profile and settings, such as changing their name, email, or preferences.

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
from updateUser import update_user_profile

user_data = {
    "user_id": "12345",
    "new_name": "John Updated",
    "new_email": "johnupdated@example.com"
}
update_user_profile(user_data)
```

## Endpoints

- **PUT /updateUse