import React, { useEffect } from 'react'
import s from './EmployeesList.module.css'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { getAllEmployees } from 'redux/reducers/employees-reducer'
import { EmployeeType } from 'api/types'
import { getBirthday } from 'utils/dates'
import { sortByName } from 'utils/sortByname'
import { useNavigate } from 'react-router-dom'
import { PATHS } from 'app/Routes'

export const EmployeesList = () => {
  const dispatch = useAppDispatch()
  const employees = useAppSelector((state) => state.employeesList.employees)
  const navigate = useNavigate()

  const employeesSort = sortByName(employees)

  const goToWorkLog = (id: number) => {
    return navigate(PATHS.WORKLOG, { state: id })
  }

  useEffect(() => {
    dispatch(getAllEmployees())
  }, [])

  const renderTableRow = (employee: EmployeeType) => {
    const name = `${employee.lastName} ${employee.firstName} ${employee.middleName}`
    return (
      <>
        <td>{employee.id}</td>
        <td>{name}</td>
        <td>{getBirthday(employee.birthDate)}</td>
      </>
    )
  }

  return (
    <div className={s.employeesList}>
      <h1>Список врачей</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>ФИО</th>
            <th>дата рождения</th>
          </tr>
        </thead>
        <tbody>
          {employeesSort?.map((employee) => {
            return (
              <tr
                className={s.workLogLink}
                onClick={() => goToWorkLog(employee.id)}
                key={employee.id}
              >
                {renderTableRow(employee)}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
