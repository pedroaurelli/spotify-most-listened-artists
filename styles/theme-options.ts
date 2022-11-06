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
      light: '#464646',
      dark: '#1C1C1C'
    },
  },
  typography: {
    fontFamily: 'Gotham, sans-serif',
    h1: {
      fontSize: '40px',
      fontWeight: '500',
      color: '#fff',
      '@media (max-width:600px)': {
        fontSize: '25px',
      }
    },
    h2: {
      fontSize: '40px',
      fontWeight: '500',
      color: '#fff',
      '@media (max-width:600px)': {
        fontSize: '30px',
      }
    },
    h4: {
      fontSize: '20px',
      fontWeight: '500',
      color: '#fff',
      '@media (max-width:600px)': {
        fontSize: '20px',
      }
    },
    body1: {
      fontSize: '20px',
      fontWeight: '500px'
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
