
export function isObject(obj) {
  return Object.prototype.toString.call(obj).toLowerCase() === '[object object]'
}

/**
 * 合并相同key Data
 */
 export function mergeData(target = {}, value = {}, defaultValue = target) {
  for (const key in value) {
    if (
      isObject(target) &&
      !Object.prototype.hasOwnProperty.call(target, key)
    ) {
      continue
    }

    if (target[key] == null) {
      target[key] = value[key] ?? defaultValue[key]
    }
    if (isObject(value[key])) {
      mergeData(target[key], value[key], defaultValue[key])
    } else if (Array.isArray(value[key])) {
      target[key] = JSON.parse(JSON.stringify(value[key]))
    } else {
      target[key] = value[key] ?? defaultValue[key]
    }
  }
  return target
}

