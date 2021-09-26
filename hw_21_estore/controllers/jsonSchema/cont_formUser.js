const Ajv = require("ajv");
const ajv = new Ajv();

const registration = (req, res, next) => {
  const schema = {
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "minLength": 1,
      },
      "email": {
        "type": "string",
        "pattern": "[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+",
      },
      "password": {
        "type": "string",
        "minLength": 3,
      },
      "additionalProperties": false
    },
    required: ["name", "email", "password"],
    additionalProperties: false
  };

  const validate = ajv.compile(schema);
  const valid = validate(req.body);
  console.log(valid);
  if (!valid) console.log(validate.errors);
  console.log('FIRST: ----',req.body);
  res.json(req.body);
  next();
};

module.exports = {
  registration
}
