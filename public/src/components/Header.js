import React from 'react'
import {useSelector} from 'react-redux'
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const Header = () => {
  const darkMode = useSelector(state => state.theme.darkMode)

  return (
    <AppBar position='static' color={darkMode ? 'default' : 'primary'}>
      <Toolbar>
        <IconButton edge='start' color='inherit' aria-label='menu'>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6'>Dashboard App</Typography>
        {}
      </Toolbar>
    </AppBar>
  )
}

export default Header
