import React from 'react'
import Wrapper from '../Wrapper'
import s from './index.module.css'

export default function WrapperContainer() {
  return (
    <div className={s.wrapper_container}>
        <Wrapper />
    </div>
  )
}
