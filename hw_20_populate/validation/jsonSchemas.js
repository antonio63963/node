const author_schema = {
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "additionalProperties": false,
  }
};
const genre_schema = {
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    }
  },
  "additionalProperties": false,
};
const book_schema = {
  "type": "object",
  "properties": {
    "author": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "string"
      }
    },
    "title": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "pic": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "genre": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "string"
      }
    }
  }
};

module.exports = {
  author_schema,
  genre_schema,
  book_schema
}