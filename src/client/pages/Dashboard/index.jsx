import * as React from "react";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { AuthenticationContext } from "client/AuthenticationContex";
import { logout } from "client/http";

export default withRouter(
  class Dashboard extends React.Component {
    onLogout = (context) => async () => {
      await logout();

      context.user = null;
      this.props.history.push("/login");
    };

    render() {
      return (
        <AuthenticationContext.Consumer>
          {(context) => {
            if (!context.user) {
              return null;
            }

            return (
              <div>
                <h1>Hello, {context.user.username}</h1>
                <div>
                  <Button variant="outlined" onClick={this.onLogout(context)}>
                    Logout
                  </Button>
                </div>
              </div>
            );
          }}
        </AuthenticationContext.Consumer>
      );
    }
  }
);
