import React from 'react'
import { ImageWrapper } from './styles'

const Image = ({src, alt}) => {
  return (
    <ImageWrapper src={src} alt={src} />
  )
}

export default Image