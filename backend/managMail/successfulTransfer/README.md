
# successfulTransfer Microservice

The `successfulTransfer` microservice handles sending email notifications when a transfer is successfully completed.

## Functionality

This microservice sends an email notification to users when their transfer is successfully processed.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd successfulTransfer
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from successfulTransfer import send_successful_transfer_email

transfer_data = {
    "recipient_email": "user@example.com",
    "transfer_amount": 150.00,
    "transfer_id": "TX987654"
}
send_successful_transfer_email(transfer_data)
```

## Endpoints

- **POST /successfulTransfer**: Sends an email notification for a successful transfer.
