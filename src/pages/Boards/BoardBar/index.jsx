import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'

const Menu_Style = {
  backgroundColor: 'transparent',
  color: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    backgroundColor: 'primary.50',
    color: 'white'
  }
}

function BoardsBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      borderBottom: '1.5px solid white'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Chip
          sx = {Menu_Style}
          icon={<DashboardIcon />}
          label="Dashboard" clickable
        />
        <Chip
          sx = {Menu_Style}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />
        <Chip
          sx = {Menu_Style}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
        />
        <Chip
          sx = {Menu_Style}
          icon={<AutoAwesomeIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx = {Menu_Style}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddAltIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}>
          Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 30,
              height: 30,
              fontSize: '0.875rem',
              border: 'none'
            }
          }}
        >
          <Tooltip title="hvietanh">
            <Avatar alt="hvietanh" src="https://hinhnenpowerpoint.app/wp-content/uploads/2024/12/avatar-anh-trang-fb-4.png" />
          </Tooltip>
          <Tooltip title="hvietanh">
            <Avatar alt="hvietanh" src="https://hinhnenpowerpoint.app/wp-content/uploads/2024/12/avatar-anh-trang-fb-4.png" />
          </Tooltip>
          <Tooltip title="hvietanh">
            <Avatar alt="hvietanh" src="https://hinhnenpowerpoint.app/wp-content/uploads/2024/12/avatar-anh-trang-fb-4.png" />
          </Tooltip>
          <Tooltip title="hvietanh">
            <Avatar alt="hvietanh" src="https://hinhnenpowerpoint.app/wp-content/uploads/2024/12/avatar-anh-trang-fb-4.png" />
          </Tooltip>
          <Tooltip title="hvietanh">
            <Avatar alt="hvietanh" src="https://hinhnenpowerpoint.app/wp-content/uploads/2024/12/avatar-anh-trang-fb-4.png" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardsBar

