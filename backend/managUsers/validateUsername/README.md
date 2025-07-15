
# validateUsername Microservice

The `validateUsername` microservice is responsible for checking if a username is available and valid for use.

## Functionality

This microservice checks if a given username is available and meets the required format and validation criteria.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd validateUsername
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from validateUsername import validate_username

username_data = {
    "username": "newuser123"
}
is_valid = validate_username(username_data)
print("Username valid:", is_valid)
```

## Endpoints

- **POST /validateUsername**: Checks if a username is available and valid.
