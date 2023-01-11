import React, { useEffect } from 'react'
import s from 'features/workLog/WorkLogList.module.css'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { getWorkLog } from 'redux/reducers/workLog-reducer'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { PATHS } from 'app/Routes'
import { filterWorkLogByEmployeeId } from 'utils/filterWorkLogByEmployeeId'
import { findBreaker } from 'utils/findBreaker'

export const WorkLogList = () => {
  const dispatch = useAppDispatch()
  const workLog = useAppSelector((state) => state.workLogList.workLog)
  const navigate = useNavigate()
  const [urlParams] = useSearchParams()

  const employeeId = urlParams.get('id') || ''
  const employeeName = urlParams.get('name') || ''

  const filterWorkLog = filterWorkLogByEmployeeId(workLog, +employeeId)

  useEffect(() => {
    dispatch(getWorkLog())
  }, [])

  if (!employeeId) return <>{navigate(PATHS.EMPLOYEES)}</>

  return (
    <div className={s.workLog}>
      <NavLink className={s.backLink} to={PATHS.EMPLOYEES}>
        Вернуться к списку врачей
      </NavLink>
      <h1>{employeeName}</h1>
      <table>
        <thead>
          <tr>
            <th>Id интервала</th>
            <th>Пришел</th>
            <th>Ушел</th>
          </tr>
        </thead>
        <tbody>
          {filterWorkLog?.map((log) => {
            const violation = findBreaker(log.id, log.to, workLog)
            return (
              <tr key={log.id} className={violation ? s.violation : ''}>
                <td>{log.id}</td>
                <td>{log.from}</td>
                <td>{log.to}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
