
# forward Microservice

The `forward` microservice is responsible for forwarding emails or notifications to other recipients.

## Functionality

This microservice takes an email or notification and forwards it to one or more specified recipients.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd forward
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from forward import forward_email

email_data = {
    "recipient_email": "user@example.com",
    "subject": "Important Notification",
    "message": "You have received an important update."
}
forward_email(email_data)
```

## Endpoints

- **POST /forward**: Forwards an email or notification to a new recipient.
