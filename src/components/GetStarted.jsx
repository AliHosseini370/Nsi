import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-red-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <img src={arrowUp} alt="arrowup" className='w-[23px] h-[23px] text-right object-contain' />
          <p className='font-medium text-[18px] text-right leading-[23px] mr-2'>
            <span className='text-gradient2'>شروع</span>
          </p>
        </div>

        <p className='font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient2'>کنید</span>
        </p>
      </div>
    </div>
)

export default GetStarted