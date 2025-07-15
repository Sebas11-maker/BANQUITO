
# welcomeBanquito Microservice

The `welcomeBanquito` microservice is responsible for sending welcome emails to users for the Banquito service.

## Functionality

This microservice sends a welcome email to new users who sign up for the Banquito service, providing them with essential information and instructions.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd welcomeBanquito
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from welcomeBanquito import send_welcome_email

user_data = {
    "email": "newuser@example.com",
    "name": "New User"
}
send_welcome_email(user_data)
```

## Endpoints

- **POST /welcomeBanquito**: Sends a welcome email to new Banquito users.
