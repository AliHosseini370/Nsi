import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => (
  <section dir='rtl' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={`${styles.heading2} text-right`}>همین الان با مشاورین ما تماس بگیرید</h2>
      <p className={`${styles.paragraph} text-right mt-5`}>تیم ما آماده پاسخگویی به سوالات شما و ارائه راهکارهای مناسب برای نیازهای شماست</p>
    </div>
    <div className={`${styles.flexCenter} sm:mr-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
)

export default CTA