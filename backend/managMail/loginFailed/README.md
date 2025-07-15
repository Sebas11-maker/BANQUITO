
# loginFailed Microservice

The `loginFailed` microservice is responsible for sending email notifications when a login attempt fails.

## Functionality

This microservice sends email alerts to users whenever there is a failed login attempt in their account.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd loginFailed
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from loginFailed import send_failed_login_email

user_data = {
    "email": "user@example.com",
    "attempted_time": "2025-07-15 10:00:00"
}
send_failed_login_email(user_data)
```

## Endpoints

- **POST /loginFailed**: Sends an email notification about a failed login attempt.
