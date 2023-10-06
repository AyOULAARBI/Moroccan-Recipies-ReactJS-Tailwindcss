import React from 'react'

function Card() {
  return (
    <div className='max-w-xs mt-8 bg-white border border-gray-200 '>
        <img src="https://images.squarespace-cdn.com/content/v1/54d4153ce4b00c0e483c13a6/1666007364921-OS0GBEDR3TLEU2DREDVQ/zaalouk%2Bdip.jpg?format=750w"
        alt="imgg" className='p-8 rounded-t-lg' />
        <div className='text-center'>
          <span className='font-bold mx-4'>Zaalouk</span>
          <span>Recipe by someChef</span>
        </div>
    </div>
  )
}

export default Card