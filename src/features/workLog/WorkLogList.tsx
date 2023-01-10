import React, { useEffect } from 'react'
import s from 'features/workLog/WorkLogList.module.css'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { getWorkLog } from 'redux/reducers/workLog-reducer'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { PATHS } from 'app/Routes'
import { filterWorkLogByEmployeeId } from 'utils/filterWorkLogByEmployeeId'

export const WorkLogList = () => {
  const dispatch = useAppDispatch()
  const workLog = useAppSelector((state) => state.workLogList.workLog)
  const navigate = useNavigate()
  const location = useLocation()

  const employeeId = location.state ? location.state : 0

  const filterWorkLog = filterWorkLogByEmployeeId(workLog, employeeId)

  console.log(filterWorkLog)

  useEffect(() => {
    dispatch(getWorkLog())
  }, [])

  if (!employeeId) return <>{navigate(PATHS.EMPLOYEES)}</>

  return (
    <div className={s.workLog}>
      <NavLink className={s.backLink} to={PATHS.EMPLOYEES}>
        Вернуться к списку врачей
      </NavLink>
      <h1></h1>
    </div>
  )
}
