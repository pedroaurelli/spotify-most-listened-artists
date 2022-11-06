import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function UnauthorizedAccess () {
  const [componentDidMount, setComponentDidMount] = useState(false)
  useEffect(() => {
    setComponentDidMount(true)
  }, [])

  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      alignContent='center'
      height='80vh'
    >
      <Grid item xs={12} md={6}>
        {componentDidMount && (
          <>
            <Typography variant='h2'>Você não está na</Typography>
            <Typography variant='h2' color='primary'>white-list</Typography>
            <Typography
              variant='h2'
              mt='40px'
              mb='60px'
            >
              {'Entre em contato comigo para '}
              <Typography variant='h2'
                color='primary'
                sx={{ display: 'inline' }}
              >
                {'obter acesso'}
              </Typography>
            </Typography>
          </>
        )}
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            width: 'auto',
            height: { xs: '280px', sm: '350px' },
            position: 'relative'
          }}
        >
          <Image
            loader={() => '/unauthorized-icon.png'}
            src={'/unauthorized-icon.png'}
            alt={'Não autorizado'}
            layout='fill'
            objectFit='contain'
          />
        </Box>
      </Grid>
    </Grid>
  )
}

