
# loginSuccessful Microservice

The `loginSuccessful` microservice handles sending email notifications when a user successfully logs in.

## Functionality

This microservice sends an email notification to the user whenever they log in successfully.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd loginSuccessful
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from loginSuccessful import send_successful_login_email

user_data = {
    "email": "user@example.com",
    "login_time": "2025-07-15 09:30:00"
}
send_successful_login_email(user_data)
```

## Endpoints

- **POST /loginSuccessful**: Sends an email notification about a successful login.
