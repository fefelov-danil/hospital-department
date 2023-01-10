import { EmployeeType } from 'api/types'

export const sortByName = (employees: EmployeeType[]) => {
  if (employees?.length > 0) {
    return [...employees]?.sort((a, b) => {
      if (a.lastName > b.lastName) {
        return 1
      }
      if (a.lastName < b.lastName) {
        return -1
      }
      return 0
    })
  }
}
