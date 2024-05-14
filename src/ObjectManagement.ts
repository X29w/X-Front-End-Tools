//#region 检验对象的所有值是否为空对象
/**
 * 检查给定对象的所有属性值是否均为空对象或未定义。
 *
 * @param {Record<string, any>} obj 待检查的对象，其属性值可以是任何类型。
 * @return {*}  {boolean} 如果所有属性值都是空对象或未定义，则返回true；否则返回false。
 */
export const AllPropertiesEmptyOrUndefined = (
  obj: Record<string, any>
): boolean => {
  return Object.values(obj).every(
    (value) =>
      value === undefined ||
      (typeof value === "object" &&
        value !== null &&
        Object.keys(value).length === 0)
  );
};
//#endregion
