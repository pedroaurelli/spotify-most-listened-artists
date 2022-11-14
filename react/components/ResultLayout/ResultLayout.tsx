import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import html2canvas from 'html2canvas'
import { getUserTopArtistsResult } from '../../../client/types/get-user-top-artists-result'
import ArtistsResultCard from '../ArtistsResultCard'
import DownloadIcon from '@mui/icons-material/Download'
import { Stack } from '@mui/system'
import ShareIcon from '@mui/icons-material/Share'

export type ResultLayoutProps = {
  data: getUserTopArtistsResult
}

export default function ResultLayout (props: ResultLayoutProps) {
  const [componentDidMount, setComponentDidMount] = useState(false)

  useEffect(() => {
    setComponentDidMount(true)
  }, [])

  const handleShare = () => {
    if (navigator.share !== undefined) {
      navigator.share({
        title: 'Mais ouvidos no mês',
        text: 'lorem ipsum',
        url: 'https://localhost:3000',
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error))
    }
  }

  const handleDownloadImage = async () => {

    const element = document.getElementById('print')
    const div = document.createElement('div')

    const elementFallBack = element || div

    console.log(element?.style)

    const canvas = await html2canvas(elementFallBack, {
      backgroundColor: null,
      allowTaint: true,
      useCORS: true,
      scale: 1,
      windowHeight: 1000,
      windowWidth: 1000
    })

    const data = canvas.toDataURL('png')

    const link = document.createElement('a')

    if (typeof link.download === 'string') {
      link.href = data
      link.download = 'image.jpg'

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      window.open(data)
    }
  }

  return (
    <>
      {componentDidMount && (
        <Stack>
          <div>
            <ArtistsResultCard data={props.data} id='print' />
          </div>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing='16px'
            alignSelf='center'
            my='24px'
          >
            <Button
              variant='outlined'
              onClick={() => handleDownloadImage()}
              startIcon={<DownloadIcon />}
              sx={{
                alignSelf: 'center'
              }}
            >
              Salvar imagem
            </Button>
            <Button
              variant='text'
              onClick={() => handleShare()}
              startIcon={<ShareIcon />}
              sx={{
                alignSelf: 'center'
              }}
            >
              Compartilhar
            </Button>
          </Stack>
        </Stack>
      )}
    </>
  )
}
