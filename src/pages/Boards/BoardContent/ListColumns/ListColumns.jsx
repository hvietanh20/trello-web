import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'


function ListColumns({ columns }) {
  return (
    <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
      <Box sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': { m: 2 }
      }}>

        {columns?.map(column => (<Column key={column._id} column={column} />))}


        {/* ADD NEW COLLUMN */}
        <Box sx={{
          minWidth: '200px',
          maxWidth: '200px',
          mx: 2,
          borderRadius: '6px',
          height: 'fit-content',
          bgcolor: '#ffffff3d'

        }}>
          <Button
            startIcon={<CreateNewFolderIcon />}
            sx={{
              color: 'white',
              width: '100%',
              justifyContent: 'flex-start',
              pl: 2.5,
              py: 1
            }}
          >Add new Column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  )
}

export default ListColumns
