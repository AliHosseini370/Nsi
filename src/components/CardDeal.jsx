import React from 'react'
import { card, gaming_case } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={`${layout.sectionImg} relative`}>
      <img src={card} alt="card" className='w-[100%] h-[100%] z-[5]' />
      <div className='absolute z-[0] w-[120%] h-[120%] -left-[90%] bottom-[5%] rounded-full bg-[#DADADA7A] blur-[500px]' />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-right`}>با چند قدم ساده <br className='sm:block hidden'/> یک معامله بهتر پیدا کنید</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-right`}>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
      </p>
      <Button styles='mt-10' />
    </div>

  </section>
)

export default CardDeal