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
  },
  wash_machine: {
    "type": "object",
    "properties": {
      "classWashings": {
        "type": "string",
        "minLength": 1,
        "maxLength": 3
      },
      "spinning": {
        "type": "string",
        "minLength": 1,
        "maxLength": 3
      },
      "loading": {
        "type": "string",
        "minLength": 2
      },
      "energySelf": {
        "type": "string",
        "minLength": 1,
        "maxLength": 5
      },
      "weight": {
        "type": "string",
        "minLength": 1,
        "maxLength": 3
      }
    },
    "additionalProperties": false,
    "required": [
      "loading",
      "weight"
    ]
  }
  // other product type schemas
}



const validateFeatures = (req, res, next) => {
  const { type, features } = req.body;
  const validate = ajv.compile(schemasObj[type]);
    const valid = validate(JSON.parse(features));
    console.log(valid);
    if (!valid) {
      console.log(validate.errors);
      return validate.errors
    } else {
      console.log("GOOD!");
      next();
      // return {status: 'ok', features: JSON.stringify(laptop)};
    }
}
// const req = {
//   body:{
//     type: 'wash_machine',
//     features: `{"classWashings":"A","spinning":"A","loading":"front","energySelf":"A+++","weight":"64"}`
//   }
// }
// validateFeatures(req)
module.exports = validateFeatures