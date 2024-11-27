import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon: Icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className='flex-1 flex flex-col mr-3'>
      <h4 className='font-semibold text-white text-[18px] leading-[23px] mb-1 text-right'>
        {title}
      </h4>
      <p className='font-normal text-dimWhite text-[16px] leading-[24px] mb-1 text-right'>
        {content}
      </p>
    </div>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-[#A0A0A01A]`}>
      {/* <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain' /> */}
      <Icon className="w-[50%] h-[50%] text-white object-contain" />
    </div>
  </div>
)

const Business = () => (
    <section id='features' className={layout.section}>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {... feature} />
        ))}
      </div>

      <div className={layout.sectionInfo}>  {/*div samte chap*/}
        <h2 className={`${styles.heading2} text-right persian-font`}>شما کار رو انجام بدید<br className='sm:block' hidden /> ما پول رو مدیریت میکنیم</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-right persian-font`}>با کارت اعتباری مناسب، می توانید زندگی مالی خود را با ایجاد اعتبار، کسب پاداش و پس انداز پول بهبود بخشید. اما با صدها کارت اعتباری در بازار
        </p>
        <Button styles='mt-10' />
      </div>

    </section>
)

export default Business