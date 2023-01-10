import React from 'react'
import 'assets/css/reset.css'
import 'assets/css/style.css'
import s from './App.module.css'
import { DoctorsList } from 'doctors/DoctorsList'

export const App = () => {
  return (
    <div className={s.wrapper}>
      <DoctorsList />
    </div>
  )
}
