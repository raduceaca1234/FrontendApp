import Bredcrumb from '../../HomeMain/Bredcrumb'
import React from 'react'
import Gallery from '../../HomeMain/Gallery'

const Main = () => {
  return (
    <>
      <Bredcrumb title="Gallery" subtitle="Gallery" />
      <div className="gallery-block">
        <Gallery />
      </div>
    </>
  )
}

export default Main