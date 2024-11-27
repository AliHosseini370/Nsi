import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className={`${styles.flexCenter} sm:mr-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
    <div className='flex-1 flex flex-col'>
      <h2 className={`${styles.heading2} text-right`}>همین الان سرویس مارو امتحان کنید</h2>
      <p className={`${styles.paragraph} text-right  mt-5`}>همه چیزهایی که برای پذیرش پرداخت های کارتی و رشد کسب و کار خود در هر نقطه از کره زمین نیاز دارید</p>
    </div>
  </section>
)

export default CTA