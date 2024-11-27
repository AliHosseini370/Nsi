import React from 'react'

const Category = ({img, text}) => {
  return (
    <div className='flex justify-center items-center flex-col w-[291.27px] h-[277.15px] bg-black-gradient-2 rounded-lg m-4 cursor-pointer hover:scale-110 duration-700'>
        <img src={img} alt={text} width='90%' height='100%' className='mb-3'/>
        <h1 className='text-white text-[20px]'>{text}</h1>
    </div>
  )
}

export default Category