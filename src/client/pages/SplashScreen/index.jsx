import * as React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withRouter } from "react-router-dom";
import { isAuthenticated } from "client/http";
import { AuthenticationContext } from "client/AuthenticationContex";

function delay(t) {
  return new Promise(function(resolve){
    setTimeout(resolve, t)
  });
}

const SplashScreen = withRouter(
  class SplashScreen extends React.Component {
    async componentDidMount() {
      const [auth] = await Promise.all([isAuthenticated(), delay(1500)]);

      if (auth === null) {
        this.props.history.push("/login");
      } else {
        this.props.user.authenticate(auth);
        this.props.history.push("/dashboard");
      }
    }

    render() {
      return (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <CircularProgress size={80} />
        </div>
      );
    }
  }
);

export default function SplashScreenAuthWrapper(){
  return <AuthenticationContext.Consumer>{function(user){
    return <SplashScreen user={user}/>
  }}</AuthenticationContext.Consumer>
}