
# validateAnswer Microservice

The `validateAnswer` microservice is responsible for validating answers provided by users, typically used for security questions.

## Functionality

This microservice checks the validity of the answers provided by the user, ensuring they match the correct answers stored in the system.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_URL>
   ```

2. Navigate to the microservice folder:

   ```bash
   cd validateAnswer
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

To use the microservice, you can call it as follows:

```python
from validateAnswer import validate_user_answer

answer_data = {
    "user_id": "12345",
    "security_question": "What is your pet's name?",
    "answer": "Fluffy"
}
is_valid = validate_user_answer(answer_data)
print("Answer valid:", is_valid)
```

## Endpoints

- **POST /validateAnswer**: Validates the answer provided by the user for a security question.
