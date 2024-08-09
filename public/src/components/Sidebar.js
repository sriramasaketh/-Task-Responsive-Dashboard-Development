import React from 'react'
import {Drawer, List, ListItem, ListItemText} from '@material-ui/core'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <Drawer variant='permanent'>
      <List>
        <ListItem button component={Link} to='/overview'>
          <ListItemText primary='Overview' />
        </ListItem>
        {}
      </List>
    </Drawer>
  )
}

export default Sidebar
