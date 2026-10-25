import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import Typography from '@mui/material/Typography'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloLogo } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Workspaces from './Menu/Workspaces'
import Recent from './Menu/Recent'
import Template from './Menu/Template'
import Starred from './Menu/Starred'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIconMai from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profile from './Menu/Profile'

function AppBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={TrelloLogo} inheritViewBox sx={{ color: 'primary.main' }} />
          <Typography variant="span" sx={{ fontSize: 'small', fontWeight: 'bold', color: 'primary.main' }}>
          Trello
          </Typography>
        </Box>

        <Workspaces />
        <Recent />
        <Starred />
        <Template />
        <Button variant="outlined">Creat</Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField id="outlined-search" label="Search..." type="search" size='small' />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIconMai sx={{ color: 'primary.main' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'primary.main' }} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  )
}

export default AppBar
