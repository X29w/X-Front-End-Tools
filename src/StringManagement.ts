//#region  判断url跳转情况
/**
 * 格式化URL，确保其具有合法的协议前缀。如果URL已包含'http://'或'https://'，则直接返回；否则，添加'https://'。
 *
 * @param {string} url 要格式化的URL字符串
 * @return {*}  {string} 格式化后的URL字符串
 */
export const formatUrl = (url: string): string =>
  url?.startsWith("https://") || url?.startsWith("http://")
    ? url
    : `https://${url}`;
//#endregion
