/***
 *  @return {*} WeekFirstDay 返回本周第一天的时间
 */
export function getWeekFirstDay() {
  const now = new Date()
  return new Date(now - now.getDay() * 86400000)
}

/***
 *  @return {*} WeekLastDay 返回本周最后一天的时间
 */
export function getWeekLastDay() {
  const now = new Date()
  const WeekFirstDay = new Date(now - now.getDay() * 86400000)
  return new Date((WeekFirstDay / 1000 + 6 * 86400) * 1000)
}

/***
 *  @return {*} MonthFirstDay 返回本月第一天的时间
 */
export function getMonthFirstDay() {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth())
}

/***
 *  @return {*} MonthLastDay 返回本月最后一天的时间
 */
export function getMonthLastDay() {
  const now = new Date()
  const MonthNextFirstDay = new Date(now.getFullYear(), now.getMonth() + 1)
  return new Date(MonthNextFirstDay - 86400000)
}