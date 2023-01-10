export type EmployeesType = Employee[]
export type WorkLogType = WorkLog[]

type Employee = {
  id: number
  firstName: string
  lastName: string
  middleName: string
  birthDate: string
  phone: string
}

type WorkLog = {
  id: number
  employee_id: number
  from: string
  to: string
}
