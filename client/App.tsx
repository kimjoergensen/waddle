import React from 'react'
import ReactDOM from 'react-dom'

export const App: React.FunctionComponent = props => {
  return (
    <h3>Hello world!</h3>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)