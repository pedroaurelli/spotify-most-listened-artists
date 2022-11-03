import { Grid, Typography } from '@mui/material'
import React from 'react'
import UnauthorizedAccessArt from '../../icons/UnauthorizedAccessArt'

export default function UnauthorizedAccess () {
  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      height='80vh'
    >
      <Grid item xs={6}>
        <Typography
          variant='h2'
        >
          {'Você não está na'}
          <Typography variant='h2'color='primary'>
            white-list
          </Typography>
        </Typography>
        <Typography
          variant='h2'
          mt='40px'
        >
          {'Entre em contato comigo para '}
          <Typography variant='h2'
            color='primary'
            sx={{ display: 'inline' }}
          >
            obter acesso
          </Typography>
        </Typography>
      </Grid>
      <Grid item>
        <UnauthorizedAccessArt />
      </Grid>
    </Grid>
  )
}

