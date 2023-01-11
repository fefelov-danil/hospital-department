import { WorkLogType } from 'api/types'

export const findBreaker = (doc1Id: number, doc1To: string | number, workLog: WorkLogType[]) => {
  let docCount = 0

  doc1To = new Date(doc1To).getTime()
  const intervals = workLog.map((log) => {
    return {
      id: log.id,
      from: new Date(log.from).getTime(),
      to: new Date(log.to).getTime(),
    }
  })

  intervals.forEach((doc2) => {
    if (doc1Id !== doc2.id && doc1To > doc2.from && doc1To <= doc2.to) {
      docCount++
    }
  })

  return docCount <= 2
}
