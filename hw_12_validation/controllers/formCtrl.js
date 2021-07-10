const Ajv = require("ajv");
const ajv = new Ajv();


const formCtrl = (req, res) => {
  const schema = {
    type: "object",
    properties: {
      id: {
        type: "string",
        maxLength: 120,
      },
      firstName: {
        type: "string",
        minLength: 1,
      },
      lastName: {
        type: "string",
        minLength: 1,
      },
      email: {
        type: "string",
        pattern: "[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+",
        // "format": "email"
      },
      gender: {
        type: "string",
        minLength: 1,
      },
      ipAddress: {
        type: "string",
        pattern: "([0-9]{1,3}[.]){3}[0-9]{1,3}",
        // "format": "ipv4",
        // "format": "ipv6"
      },
    },
    required: ["id", "firstName", "lastName", "email"],
    additionalProperties: false,
  };

  console.log("REQ BODY: ", req.body);
  console.log(schema);
  const validate = ajv.compile(schema);
  const valid = validate(req.body);
  console.log(valid);
  if (!valid) console.log(validate.errors);
  res.json(req.body);
}

module.exports = formCtrl;