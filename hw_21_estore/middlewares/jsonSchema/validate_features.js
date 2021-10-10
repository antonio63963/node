const Ajv = require("ajv");
const ajv = new Ajv();


const schemasObj = {
  laptop: {
    "type": "object",
    "properties": {
      "diagonal": {
        "type": "string",
        "minLength": 1,
        "maxLength": 2,
      },
      "processor_series": {
        "type": "string",
        "minLength": 3,
        "maxLength": 32,
      },
      "processor": {
        "type": "string",
        "minLength": 3,
      },
      "additionalProperties": false,
    },
    "additionalProperties": false,
    "required": ["diagonal", "processor", "processor_series"]
  }
  // other product type schemas
}



const validateFeatures = (req, res, next) => {
  const { type, features } = req.body;
  const validate = ajv.compile(schemasObj[type]);
    const valid = validate(JSON.parse(features));
    console.log(valid);
    if (!valid) {
      return validate.errors
    } else {
      console.log("GOOD!");
      return {status: 'ok', features: JSON.stringify(laptop)};
    }
}

module.exports = validateFeatures