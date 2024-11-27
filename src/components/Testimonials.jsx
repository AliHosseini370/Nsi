import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => (
  <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='absolute z-[0] w-[50%] h-[50%] -right-[50%] rounded-full third_red__gradient' />

    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative'>
      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph}max-w-[450px] text-right`}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
      </div>
      <h1 className={`${styles.heading2} text-right`}>مشتریان راجب ما <br className='sm:block hidden'/> چه فکری میکنند</h1>
    </div>

    <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
      {feedback.map((feedback,index) => (
        <FeedbackCard key={feedback.id} {...feedback} />
      ))}
    </div>
  </section>
)

export default Testimonials