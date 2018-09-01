import * as React from "react";
import { withRouter } from "react-router-dom";

export class User {
  user = null;

  authenticate(user) {
    this.user = user;
  }
}

export const AuthenticationContext = React.createContext();

export function Protected(Wrappee) {
  const Wrapped = withRouter(
    class Wrapper extends React.Component {
      displayName = `Protected(${Wrappee.displayName ||
        Wrappee.name ||
        "Component"})`;

        constructor(props) {
          super(props);

          if(this.props.user === null) {
            this.props.history.push('/');
          }
        }

        render() {
          const {match, location, history, user, ...props} = this.props;

          return <Wrappee {...props}/>
        }
    }
  );

  return function WithAuth() {
    return <AuthenticationContext.Consumer>{function(user){
      return <Wrapped user={user.user}/>
    }}</AuthenticationContext.Consumer>
  };
}
