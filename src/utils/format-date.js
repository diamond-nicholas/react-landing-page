export const formatDate = text => {
  const monthNames = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER'
  ]
  const formatted = new Date(text)

  const formattedMonth = monthNames[formatted.getMonth()]
  const formattedDay = formatted.getDate()
  const formattedYear = formatted.getFullYear()

  return `${formattedMonth} ${formattedDay}, ${formattedYear}`
}
