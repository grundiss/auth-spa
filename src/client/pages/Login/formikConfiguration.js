import { authenticate } from "client/http";

function mapPropsToValues() {
  return { username: "", password: "", success: false };
}

function validate({ username, password }) {
  const errors = {};

  if (!username) {
    errors.emptyUsername = true;
  }

  if (!password) {
    errors.emptyPassword = true;
  }

  return errors;
}

async function handleSubmit(values, formikController) {
  const authResult = await authenticate(values);

  if (authResult === null) {
    formikController.setErrors({ loginFailed: true });
  } else {
    formikController.setFieldValue('success', authResult);
  }
}

export default { mapPropsToValues, validate, handleSubmit };
