const Ajv = require("ajv");
const ajv = new Ajv();


const schemasObj = {

  laptop(laptop) {
    console.log('LAPTOP RUN', laptop);
    const schema = {
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
    };

    const validate = ajv.compile(schema);
    const valid = validate(laptop);
    console.log(valid);
    if (!valid) {
      return validate.errors
    } else {
      console.log("GOOD!");
      return laptop
    }
    // console.log('FIRST: ----',req.body);
    // next();
  }
}



const validateFeatures = (req, res, next) => {
  const { type, features } = req.body;
  const val = schemasObj[type](JSON.parse(features));
  console.log(val);
  next();
}

module.exports = validateFeatures