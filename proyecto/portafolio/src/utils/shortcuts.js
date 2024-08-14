const map = (object, func, isValue = true) => {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      if (isValue) {
        return [key, func(value, key)]
      } else {
        return [func(value, key), value]
      }
    })
  )
}

export const mapKeys = (object, func) => {
  return map(object, func, false)
}

export const mapValues = (object, func) => {
  return map(object, func)
}

export const debounce = (func, delay) => {
  let timeoutId

  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
