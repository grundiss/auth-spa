import * as React from "react";
import { AuthenticationContext } from "client/AuthenticationContex";

export default function Dashboard() {
  return (
    <AuthenticationContext.Consumer>
      {function(context) {
        if(!context.user) {
          return null
        }

        return <h1>Hello, {context.user.username}</h1>;
      }}
    </AuthenticationContext.Consumer>
  );
}
