import React, { useContext } from 'react'
import { ImageContext } from '../App'
import Image from './Image'
import Skeleton from './Skeleton'

export default function Images() {
  const { response, isLoading,searchImage } = useContext(ImageContext)
  return (
    <>
      <h1 className='text-center mt-6 underline text-2xl'>Search Results for {searchImage || "Cats"}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
        {isLoading ? <Skeleton item={10} /> : response.map((data, key) => {
          return (
            <Image
              key={key}
              data={data}
            />
          )
        })}

      </div>
    </>
  )
}
