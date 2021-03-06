import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router-dom'

import { Add, Home } from '@material-ui/icons'

import styles from './app.module.scss'
import { AppRouter, AppRoutes } from './App.router'
import { FooterItem } from './components/footer-item/FooterItem'
import { Footer } from './components/footer/Footer'
import { Logo } from './components/logo/Logo'
import { Main } from './components/main/Main'
import { Menu } from './components/menu/Menu'
import { Navigation } from './components/navigation/Navigation'
import { ThemeToggle } from './components/theme-toggle/ThemeToggle'
import { ProductRoutes } from './pages/product/Product.router'
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
    <Router.BrowserRouter>
      <ThemeContext.Provider value={variant}>
        <div className={styles.container} style={{ background: theme.background, color: theme.color }}>
          <Navigation>
            <Router.Link to="/">
              <Logo />
            </Router.Link>
            <Menu />
          </Navigation>

          <Main>
            <AppRouter />
          </Main>

          <Footer>
            <Router.Link to={AppRoutes.Home}>
              <FooterItem icon={<Home />} label="Home" />
            </Router.Link>
            <Router.Link to={`${AppRoutes.Product}${ProductRoutes.New}`}>
              <FooterItem icon={<Add />} label="New" />
            </Router.Link>
            <ThemeToggle onThemeChanged={toggleTheme} />
          </Footer>
        </div>
      </ThemeContext.Provider>
    </Router.BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)