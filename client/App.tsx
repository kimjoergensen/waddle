import React from 'react'
import ReactDOM from 'react-dom'

import styles from './app.module.scss'
import { Main } from './components/main/Main'
import { Navigation } from './components/navigation/Navigation'
import { useTheme } from './hooks/UseTheme'
import ThemeConfig from './theme/theme-config'
import { ThemeContext } from './theme/theme-provider'

export const App: React.FunctionComponent = props => {
  const [variant, setVariant] = React.useState(ThemeConfig.Variant.dark)
  const theme = useTheme()

  const toggleTheme = () => {
    setVariant(state =>
      state === ThemeConfig.Variant.light
        ? ThemeConfig.Variant.dark
        : ThemeConfig.Variant.light
    )
  }

  return (
    <ThemeContext.Provider value={variant}>
      <div className={styles.container} style={{ backgroundColor: theme.background, color: theme.color }}>
        <Navigation>

        </Navigation>

        <Main>

        </Main>
      </div>
    </ThemeContext.Provider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)