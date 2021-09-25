const Ajv = require("ajv");
const ajv = new Ajv();

const registration = () => {
  const schema = {
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "minLength": 1,
        "required": true
      },
      "email": {
        "type": "string",
        "pattern": "[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+",
        "required": true
      },
      "password": {
        "type": "string",
        "minLength": 3,
        "required": true
      },
      "additionalProperties": false
    }
  }
}