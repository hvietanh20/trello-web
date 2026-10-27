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
  backgroundColor: 'white',
  color: 'primary.main',
  fontWeight: 'bold',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    backgroundColor: 'primary.light',
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
      borderTop: '1.5px solid #72500c'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
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
          sx={{ fontSize: '0.875rem', fontWeight: 'bold', color: 'primary.main', borderColor: 'primary.main', '&:hover': { backgroundColor: 'primary.light', color: 'white' } }}>
          Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            '& .MuiAvatar-root': {
              width: 30,
              height: 30,
              fontSize: '0.875rem'
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

