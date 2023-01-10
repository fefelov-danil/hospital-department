import { WorkLogType } from 'api/types'

export const filterWorkLogByEmployeeId = (workLog: WorkLogType[], id: number) => {
  if (workLog?.length > 0) {
    return workLog.filter((log) => {
      if (log.employee_id === id) return true
    })
  }
  return []
}
