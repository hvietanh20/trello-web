import React from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'


function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      <Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ padding: 0 }}
            aria-controls={open ? 'basic-menu-profile' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 36, height: 36 }} src='https://hinhnenpowerpoint.app/wp-content/uploads/2024/12/avatar-anh-trang-fb-4.png'/>
          </IconButton>
        </Tooltip>
        <Menu
          id="basic-menu-profile"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button-profile'
          }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar sx={{ width: 24, height: 24, mr: 2 }} /> Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Avatar sx={{ width: 24, height: 24, mr: 2 }} /> My account
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
          Add another account
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
          Settings
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
          Logout
          </MenuItem>
        </Menu>
      </Box>
    </div>
  )
}

export default Profile
