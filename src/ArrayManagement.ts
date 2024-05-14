

//#region 数组查重
/**
 * 检查数组中是否有重复的元素，支持自定义比较逻辑。
 *
 * @param arr 要检查的数组
 * @param comparator 自定义的比较函数，用于判断两个元素是否相等，默认为严格相等比较
 * @returns 是否存在重复元素
 */
export const uniqueArrayAdvanced = <T>(
  arr: T[],
  comparator: (a: T, b: T) => boolean = (a, b) => a === b
): boolean => {
  const seen = new Map<T, boolean>();
  for (const item of arr) {
    const found = Array.from(seen.entries()).some(([key, _]) =>
      comparator(item, key)
    );
    if (found) {
      return true; // 发现重复元素
    }
    seen.set(item, true);
  }
  return false; // 无重复元素
};
//#endregion

//#region 根据id合并两个数组
/**
 *
 *
 * @template T
 * @template U
 * @param {T[]} sourceArr 第一个数组
 * @param {U[]} targetArr 第二个数组
 * @param {(keyof (T & U))} [keyField="id" as keyof T & U] 指定作为唯一标识的字段名，默认为'id'
 * @param {boolean} [keepUnmatched=true] 是否保留未匹配的元素，默认为true
 * @return {*}  {((T & U)[])} 合并后的数组，包含sourceArr和targetArr中所有元素，相同标识的元素被合并
 */
export const mergeArraysByKey = <
  T extends Record<string, any>,
  U extends Record<string, any>
>(
  sourceArr: T[],
  targetArr: U[],
  keyField: keyof (T & U) = "id" as keyof T & U,
  keepUnmatched: boolean = true
): (T & U)[] => {
  const getKey = <X extends Record<string, any>>(item: X) =>
    item[keyField as any];
  const sourceMap = new Map(sourceArr.map((item) => [getKey(item), item]));
  const targetMap = new Map(targetArr.map((item) => [getKey(item), item]));
  const mergedItems: (T & U)[] = [];

  // 合并匹配的元素
  sourceMap.forEach((sourceItem, key) => {
    const targetItem = targetMap.get(key);
    if (targetItem) {
      mergedItems.push({ ...sourceItem, ...targetItem } as T & U);
    } else if (keepUnmatched) {
      mergedItems.push(sourceItem as T & U);
    }
  });

  // 添加targetArr中未在sourceArr中匹配到的元素
  targetMap.forEach((targetItem, key) => {
    if (!sourceMap.has(key)) {
      mergedItems.push(targetItem as T & U);
    }
  });

  return mergedItems;
};
//#endregion
