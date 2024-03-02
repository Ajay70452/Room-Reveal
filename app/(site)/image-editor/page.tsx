import BackBtn from '@/components/Button/BackBtn'
import ImageEditor from '@/components/image-editor/ImageEditor'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='mx-2 my-4'>
        <BackBtn />
      </div>
        <ImageEditor />
    </div>
  )
}

export default page