import * as React from 'react'

export const AuthenticationContext = {
  Consumer: jest.fn(({ children }) => (
    <div data-mockof="client/AuthenticationContex">
      {children({ user: {username: "Mr. Mocker McMockface" }})}
    </div>
  ))
}