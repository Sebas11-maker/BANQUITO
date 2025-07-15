
# confirmTransfer Microservice

The `confirmTransfer` microservice handles sending email notifications related to confirmed transfers.

## Functionality

This microservice sends email notifications to users when a transfer is successfully confirmed.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd confirmTransfer
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from confirmTransfer import send_confirmation_email

transfer_data = {
    "recipient_email": "user@example.com",
    "transfer_amount": 100.00,
    "transfer_id": "TX123456"
}
send_confirmation_email(transfer_data)
```

## Endpoints

- **POST /confirmTransfer**: Sends an email confirmation for a transfer.
