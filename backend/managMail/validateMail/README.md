
# validateMail Microservice

The `validateMail` microservice is responsible for validating email addresses to ensure they are properly formatted and active.

## Functionality

This microservice validates whether an email address is correctly formatted and active, helping to prevent invalid emails in the system.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd validateMail
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from validateMail import validate_email

email_data = {
    "email": "user@example.com"
}
is_valid = validate_email(email_data)
print("Is the email valid?", is_valid)
```

## Endpoints

- **GET /validateMail**: Validates if an email address is correctly formatted and active.
