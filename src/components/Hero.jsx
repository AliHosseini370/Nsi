import React from 'react'
import styles from '../style'
import { discount, laptop_header } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={laptop_header} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
      <div className='absolute z-[0] w-[40%] h-[35%] top-80 main_red__gradient' />
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 red_background' />
      <div className='absolute z-[0] w-[50%] h-[50%] right-40 bottom-40 second_red__gradient' />
    </div>

    <div className={`flex-1 ${styles.flexEnd} flex-col xl:px-0 sm:px-16 px-6 relative`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-dicount-gradient rounded-[10px] mb-2'> {/* neveshte kochik bala heder*/}
        <p className={`${styles.paragraph} ml-2 text-right`}>
          تخفیف {" "}
          <span className='text-white'> 20% </span>
           برای خرید
           <span className='text-white text-right'> اول</span>
        </p>
        <img src={discount} alt="discount" className='w-[32px] h-[32px] ml-2' />
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
        <h1 className='flex-1 text-right font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>سیستم های <br className='sm:block hidden' /> {" "}
          <span className='text-gradient2'>مدرن</span> {" "}
        </h1>
      </div>

      <h1 className='text-right font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
        با ساختار پیشرفته  
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-right`}>
        لپ‌تاپ‌ها، کارت‌های گرافیک و سیستم‌های پیشرفته برای حرفه‌ای‌ها در هر زمینه‌ای؛ از طراحی و مهندسی تا گیمینگ و محاسبات سنگین
      </p>
      <div className='absolute z-[0] w-[195px] h-[324px] right-0 bottom-40 white__gradient2' />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
)

export default Hero