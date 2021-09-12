const Ajv = require("ajv")

function ajvValidator(data, schema) {
  const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

  const validate = ajv.compile(schema)
  const valid = validate(data)
  if (!valid) console.log(validate.errors)
  return valid;
};
module.exports = ajvValidator;