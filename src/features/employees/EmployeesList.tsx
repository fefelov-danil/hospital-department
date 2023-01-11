import React, { useEffect } from 'react'
import s from './EmployeesList.module.css'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { getAllEmployees } from 'redux/reducers/employees-reducer'
import { EmployeeType } from 'api/types'
import { getBirthday } from 'utils/dates'
import { sortByName } from 'utils/sortByname'
import { PATHS } from 'app/Routes'
import { NavLink } from 'react-router-dom'

export const EmployeesList = () => {
  const dispatch = useAppDispatch()
  const employees = useAppSelector((state) => state.employeesList.employees)

  const employeesSort = sortByName(employees)

  useEffect(() => {
    dispatch(getAllEmployees())
  }, [])

  const renderTableRow = (employee: EmployeeType) => {
    const name = `${employee.lastName} ${employee.firstName} ${employee.middleName}`
    return (
      <>
        <td>{employee.id}</td>
        <td>
          <NavLink to={`${PATHS.WORKLOG}?id=${employee.id}&name=${name}`}>{name}</NavLink>
        </td>
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
              <tr className={s.workLogLink} key={employee.id}>
                {renderTableRow(employee)}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
