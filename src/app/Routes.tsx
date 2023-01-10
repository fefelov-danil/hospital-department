import { Route, Routes } from 'react-router-dom'
import React from 'react'
import { EmployeesList } from 'features/employees/EmployeesList'
import { WorkLogList } from 'features/workLog/WorkLogList'

export const PATHS = {
  EMPLOYEES: '/',
  WORKLOG: '/workLog',
}

export const Pages = () => {
  return (
    <Routes>
      <Route path={PATHS.EMPLOYEES} element={<EmployeesList />} />
      <Route path={PATHS.WORKLOG} element={<WorkLogList />} />
    </Routes>
  )
}
