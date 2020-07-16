const { isEmail, isEmpty } = require("../../../util/validation");

exports.validateField = (name, value) => {
  let errors = {};
  switch (name) {
    case "name":
      isEmpty(value)
        ? (errors.name = "Please add your name")
        : (errors.name = "");
      break;
    case "email":
      !isEmail(value)
        ? (errors.email = "Please add a valid email")
        : (errors.email = "");

      break;

    case "subject":
      isEmpty(value)
        ? (errors.subject = "Please add a subject")
        : (errors.subject = "");

      break;
    case "message":
      isEmpty(value)
        ? (errors.message = "Please add a message")
        : (errors.message = "");
      break;
    default:
      break;
  }
  return errors;
};
