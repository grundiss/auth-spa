import * as React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withFormik } from "formik";
import { withRouter } from "react-router-dom";
import formikConfiguration from "./formikConfiguration";
import { AuthenticationContext } from "client/AuthenticationContex";

function displayError(errors) {
  if (errors.emptyUsername) {
    return "Empty username";
  } else if (errors.emptyPassword) {
    return "Empty password";
  } else if (errors.loginFailed) {
    return "Invalid username or password";
  }

  return "";
}

const Login = withRouter(
  withFormik(formikConfiguration)(
    class Login extends React.Component {
      componentDidUpdate(prevProps) {
        if (!!this.props.values.success && !prevProps.values.success) {
          this.props.user.authenticate(this.props.values.success);

          this.props.history.push('/dashboard');
        }
      }

      render() {
        const { values, errors, handleChange, handleSubmit } = this.props;

        return (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 300,
              transform: "translate(-50%, -50%) translateY(-40px)"
            }}
          >
            <Card>
              <CardMedia
                component="img"
                height="190"
                image="http://fotose.com/upload/iblock/889/889d3006eef8fd25811409765e11ed7d.jpg"
                style={{ objectFit: "cover" }}
              />
              <CardContent>
                <TextField
                  name="username"
                  label="Username"
                  value={values.username}
                  onChange={handleChange}
                  fullWidth
                  autoComplete="off"
                />
                <br />
                <TextField
                  name="password"
                  label="Password"
                  value={values.passwrod}
                  type="password"
                  onChange={handleChange}
                  fullWidth
                  autoComplete="off"
                />
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={handleSubmit}>
                  Login
                </Button>
                <div>{displayError(errors)}</div>
              </CardActions>
            </Card>
          </div>
        );
      }
    }
  )
);

export default function LoginWrapper() {
  return (
    <AuthenticationContext.Consumer>
      {function(user) {
        return <Login user={user} />;
      }}
    </AuthenticationContext.Consumer>
  );
}
