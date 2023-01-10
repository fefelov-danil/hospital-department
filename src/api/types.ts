export type EmployeeType = {
  id: number
  firstName: string
  lastName: string
  middleName: string
  birthDate: string
  phone: string
}

export type WorkLogType = {
  id: number
  employee_id: number
  from: string
  to: string
}
