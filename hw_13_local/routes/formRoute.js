const express = require("express");
const router = express.Router();
const Ajv = require("ajv");
const ajv = new Ajv();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const schema = {
  "type": "object",
  "properties": {
    "userName": {
      "type": "string",
      "minLength": 1
    },
    "userLastname": {
      "type": "string",
      "minLength": 1
    },
    "city": {
      "type": "string",
      "minLength": 1
    },
    "deliveryMethod": {
      "type": "string"
    },
    "deliveryMethods": {
      "type": "string"
    },
    "methodAddress": {
      "type": "string",
      "minLength": 1
    },
  },
  "required": [
    "userName",
    "userLastname",
    "city",
    "deliveryMethods",
    "methodAddress"
  ],
  "additionalProperties": false
}

router.post("/", upload.none(), (req, res) => {

//   const schema = {
//     type: "object",
//     properties: {
//       foo: {type: "integer"},
//       bar: {type: "string"}
//     },
//     required: ["foo"],
//     additionalProperties: false,
//   }

// const data = {
//   foo: 1,
//   bar: "abc"
// }
  const data = req.body;
  console.log(data);
  const validate = ajv.compile(schema);
  const valid = validate(req.body);
  console.log(valid);
  if (!valid) console.log(validate.errors);
  res.json(req.body);
});

module.exports = router;
