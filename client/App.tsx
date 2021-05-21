import React from 'react'
import ReactDOM from 'react-dom'

import styles from './app.module.scss'

export const App: React.FunctionComponent = props => {
  return (
    <div className={styles.container}>
      <h3>Hello world!</h3>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)