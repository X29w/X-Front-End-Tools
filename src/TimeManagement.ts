import { CurrentTimeINT } from "./interface";

// #region 格式化时间戳
/**
 * 格式化时间戳,可从对象中取出不同精度的时间
 * @example{
    yearMonthDay,
    yearMonth,
    yearDay,
    monthDay,
    month,
    day,
    year,
    hour,
    minute,
    second,
    hourMinuteSecond,
    yearMonthDayHourMinuteSecond
   }
 * @param {number} timestamp
 * @param {string} symbol 标志，默认为“-”
 * @return {*}
 */
export const formatTimestamp = (
  timestamp: number,
  symbol: string = "-"
): CurrentTimeINT => {
  const date = new Date(timestamp);
  const year = date.getFullYear().toString();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");

  return {
    yearMonthDay: `${year}${symbol}${month}${symbol}${day}`,
    yearMonth: `${year}${symbol}${month}`,
    yearDay: `${year}${symbol}${day}`,
    monthDay: `${month}${symbol}${day}`,
    month: month,
    day,
    year,
    hour,
    minute,
    second,
    hourMinuteSecond: `${hour}:${minute}:${second}`,
    yearMonthDayHourMinuteSecond: `${year}${symbol}${month}${symbol}${day} ${hour}:${minute}:${second}`,
  };
};
//#endregion

//#region 获取当前时间
/**
 * 获取当前时间 可从对象中取出不同精度的时间
 * @example{
    yearMonthDay,
    yearMonth,
    yearDay,
    monthDay,
    month,
    day,
    year,
    hour,
    minute,
    second,
    hourMinuteSecond,
    yearMonthDayHourMinuteSecond
   }
 * @param {string} symbol 标志，默认为“-”
 * @return {*}  {CurrentTimeINT}
 */
export const getCurrentDateTime = (symbol: string = "-"): CurrentTimeINT => {
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hour = String(currentDate.getHours()).padStart(2, "0");
  const minute = String(currentDate.getMinutes()).padStart(2, "0");
  const second = String(currentDate.getSeconds()).padStart(2, "0");

  const yearMonthDay = `${year}${symbol}${month}${symbol}${day}`;
  const yearMonth = `${year}${symbol}${month}`;
  const yearDay = `${year}${symbol}{day}`;
  const monthDay = `${month}${symbol}${day}`;
  const hourMinuteSecond = `${hour}:${minute}:${second}`;
  return {
    yearMonthDay,
    yearMonth,
    yearDay,
    monthDay,
    month,
    day,
    year,
    hour,
    minute,
    second,
    hourMinuteSecond,
    yearMonthDayHourMinuteSecond: `${year}${symbol}${month}${symbol}${day} ${hour}:${minute}:${second}`,
  };
};
//#endregion
