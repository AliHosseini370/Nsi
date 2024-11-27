import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import styles from '../style'

const Question = ({question, text}) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <section style={{ direction: "rtl" }} className='flex items-start text-black flex-col bg-transparent cursor-pointer mb-4' onClick={() => setIsOpen(!isOpen)}>
        <div className='flex flex-row mb-2 w-full items-center'>
          <h1 className='text-[20px]'>{question}</h1>
          {isOpen ? <FaMinus className='text-black mr-auto' /> : <FaPlus className='text-black mr-auto'/>}
        </div>
        <div className={`transition-max-height duration-700 ease-in-out overflow-hidden mb-1 ${
            isOpen ? 'max-h-40' : 'max-h-0'
          }`}>
            {isOpen && <p className='text-black text-[18px]'>{text}</p>}
        </div>
        <hr className='w-full h-[2px] bg-black border-0'/>
    </section>
  )
}

export default Question