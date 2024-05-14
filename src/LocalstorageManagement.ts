//#region 存储本地存储操作
/**
 * 保存数据到本地存储，支持任何可序列化的数据类型。
 *
 * @template T 存储数据的类型，必须是可序列化为JSON的。
 * @param {string} storageKey 本地存储的键名。
 * @param {T} itemValue 要存储的值。
 */
export const saveItemToLocal = <T>(storageKey: string, itemValue: T): void => {
  if (itemValue === undefined || itemValue === null) return;
  try {
    const serializedValue = JSON.stringify(itemValue);
    window.localStorage.setItem(storageKey, serializedValue);
  } catch (error) {
    console.error("saveItemToLocal - Error serializing value:", error);
  }
};
//#endregion

//#region 从本地存储中检索数据
/**
 * 从本地存储中检索数据，并尝试自动解析为原始类型。
 *
 * @template T 预期解析后的数据类型。
 * @param {string} storageKey 本地存储的键名。
 * @returns {T | null} 解析后的数据，如果解析失败或键不存在则返回null。
 */
export const retrieveItemFromLocal = <T>(storageKey: string): T | null => {
  const rawValue = window.localStorage.getItem(storageKey);
  if (rawValue) {
    try {
      return JSON.parse(rawValue) as T;
    } catch (error) {
      console.error(
        "retrieveItemFromLocal - Error parsing stored value:",
        error
      );
    }
  }
  return null;
};
//#endregion

//#region 清除本地存储
/**
 * 从本地存储中移除指定key的值
 *
 * @param {string} storageKey 要移除的键名
 * @returns {boolean} 是否成功移除
 */
export const removeItemFromLocal = <K extends string>(
  storageKey: K
): boolean => {
  try {
    if (window.localStorage.getItem(storageKey)) {
      window.localStorage.removeItem(storageKey);
      return true;
    }
  } catch (error) {
    // 捕获可能的异常，例如QuotaExceededError等
    console.error("removeItemFromLocal - Error removing item:", error);
  }
  return false;
};
//#endregion
