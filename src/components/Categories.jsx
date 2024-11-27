import React from 'react'
import Category from './Category'
import {gaming_headphone, gaming_laptop, gaming_case2, graphic_card, gaming_case2_edited} from '../assets'

const Categories = () => {
  return (
    <div className='flex flex-col p-10 ' id='product'>
      <h1 className='text-white text-center text-[38px] z-[1]'>خرید بر اساس کاربرد</h1>
      <div className='flex justify-between items-center flex-col p-10 md:flex-row z-[1]'>
        <Category img={gaming_case2_edited} text='کامپیوتر'/>
        <Category img={gaming_laptop} text='لپ تاپ'/>
        <Category img={gaming_headphone} text='هدفون'/>
        <Category img={graphic_card} text='کارت گرافیک'/>
      </div>
    </div>
  )
}

export default Categories