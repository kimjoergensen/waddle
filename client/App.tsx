import React from 'react'
import ReactDOM from 'react-dom'

import styles from './app.module.scss'
import { Footer } from './components/footer/Footer'
import { Main } from './components/main/Main'
import { Navigation } from './components/navigation/Navigation'
import ThemeConfig from './theme/theme-config'
import { ThemeContext } from './theme/theme-context'

export const App: React.FunctionComponent = props => {
  const [variant, setVariant] = React.useState(ThemeConfig.Variant.dark)
  const theme = ThemeConfig.getTheme(variant)

  const toggleTheme = () => {
    setVariant(state =>
      state === ThemeConfig.Variant.light
        ? ThemeConfig.Variant.dark
        : ThemeConfig.Variant.light
    )
  }

  return (
    <ThemeContext.Provider value={variant}>
      <div className={styles.container} style={{ background: theme.background, color: theme.color }}>
        <Navigation>

        </Navigation>

        <Main>
          <h3>Hello, world!</h3>
        </Main>

        <Footer>
          <button onClick={() => toggleTheme()}>Toggle</button>
        </Footer>
      </div>
    </ThemeContext.Provider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)