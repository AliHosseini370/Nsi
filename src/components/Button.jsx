import React from 'react'

const Button = ({ styles }) => (
    <button type='button' className={`py-4 px-6 button_white_gradient font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      همین حالا تماس بگیر
    </button>
)

export default Button