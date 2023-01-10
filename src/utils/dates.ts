export const getBirthday = (date: string) => {
  const birthYear = new Date(date).getFullYear()
  let birthMonth: string | number = new Date(date).getMonth() + 1
  birthMonth = birthMonth < 10 ? '0' + birthMonth : birthMonth
  let birthDay: string | number = new Date(date).getDate()
  birthDay = birthDay < 10 ? '0' + birthDay : birthDay

  return `${birthDay}.${birthMonth}.${birthYear}`
}
