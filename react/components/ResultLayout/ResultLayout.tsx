import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import html2canvas from 'html2canvas'
import { getUserTopArtistsResult } from '../../../client/types/get-user-top-artists-result'
import ArtistsResultCard from '../ArtistsResultCard'
import DownloadIcon from '@mui/icons-material/Download'
import { Stack } from '@mui/system'

export type ResultLayoutProps = {
  data: getUserTopArtistsResult
}

export default function ResultLayout (props: ResultLayoutProps) {
  const [componentDidMount, setComponentDidMount] = useState(false)

  useEffect(() => {
    setComponentDidMount(true)
  }, [])

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
          <Button
            variant='outlined'
            onClick={() => handleDownloadImage()}
            startIcon={<DownloadIcon />}
            sx={{
              alignSelf: 'center',
              my: '16px'
            }}
          >
            Salvar imagem
          </Button>
        </Stack>
      )}
    </>
  )
}
