import { ThemeOptions } from '@mui/material'

export const themeOptions: ThemeOptions = {
  palette: {
    background: {
      default: '#191414'
    },
    primary: {
      main: '#1DB954',
      light: '#1DB954',
      dark: '#1DB954'
    },
    secondary: {
      main: '#191414',
      light: '#191414',
      dark: '#191414'
    },
  },
  typography: {
    fontFamily: 'Gotham, sans-serif',
    h1: {
      fontSize: '40px',
      fontWeight: '500',
      color: '#fff'
    },
    h2: {
      fontSize: '40px',
      fontWeight: '500',
      color: '#fff'
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          borderRadius: '60px',
          textTransform: 'uppercase',
          padding: '16px',
          fontSize: '16px',
          fontWeight: 'bold'
        }
      }
    }
  }
}
