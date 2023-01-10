import React from 'react'
import 'assets/css/reset.css'
import 'assets/css/style.css'
import s from './App.module.css'
import { useAppSelector } from 'redux/store'
import { LinearProgress } from '@mui/material'
import { Pages } from 'app/Routes'

export const App = () => {
  const appStatus = useAppSelector((state) => state.app.appLoading)

  return (
    <div className={s.wrapper}>
      <div className={s.linearProgress}>{appStatus && <LinearProgress />}</div>
      <Pages />
    </div>
  )
}
