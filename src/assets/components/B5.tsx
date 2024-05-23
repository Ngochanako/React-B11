import React from 'react'

export default function B5() {
  return (
    <div>
      <p>Bài 5</p>
      <div className='bg-sky-200 w-52 h-52 rounded-lg  flex items-center justify-center'>
        <div className='relative bg-sky-300 w-44 h-44'>
            <p className='mt-5 ml-5 text-blue-500 font-medium'>Relative parent</p>
            <div className='absolute bottom-0 left-0  bg-sky-400 w-24 h-12 rounded-lg p-0.5'>
                <p className='text-blue-500 font-medium'>Absolute Child</p>
            </div>
        </div>
      </div>
    </div>
  )
}
