import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '68px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          light: '#A67C5B',
          main: '#7B5436', // walnut
          dark: '#4E3322', // espresso
          contrastText: '#FBF5EC',
          gradient: 'linear-gradient(135deg, #A67C5B 0%, #7B5436 50%, #4E3322 100%)'
        },
        secondary: {
          light: '#D4B886',
          main: '#B08D57', // brass gold
          dark: '#8A6B3A',
          contrastText: '#2B1D10',
          gradient: 'linear-gradient(135deg, #D4B886 0%, #B08D57 55%, #8A6B3A 100%)'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          light: '#DDB98F',
          main: '#C49A6C', // camel
          dark: '#9A7347',
          contrastText: '#241608',
          gradient: 'linear-gradient(135deg, #DDB98F 0%, #C49A6C 50%, #9A7347 100%)'
        },
        secondary: {
          light: '#EAD7AE',
          main: '#D9BF8C', // champagne
          dark: '#B89A5E',
          contrastText: '#2B1D10',
          gradient: 'linear-gradient(135deg, #EAD7AE 0%, #D9BF8C 50%, #B89A5E 100%)'
        }
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar':{
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb':{
            backgroundColor: 'rgba(111, 62, 16, 0.2)',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover':{
            backgroundColor: 'rgba(52, 25, 0, 0.2)',
            borderRadius: '8px'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem'
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main
          },
          '& fieldset': {
            borderWidth: '1px !important'
          }
        })
      }
    }
  }
})

export default theme