import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-end items-center flex-row m-3`}>
        <p className='font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient2 uppercase mr-3'>{stat.title}</p>
        <h4 className='font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
      </div>
    ))}
  </section>
)

export default Stats