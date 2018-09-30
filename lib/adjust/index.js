import curry3 from '../_internal/_curry3'

export default curry3(function adjust(fn, i, arr) {
  if (process.env.NODE_ENV !== 'production') {
    require('../_internal/_error').checkTypes('adjust', {
      fn: [fn, ['function'], typeof fn !== 'function'],
      i: [i, ['string', 'number'], typeof i !== 'string' && typeof i !== 'number'],
      arr: [arr, ['array'], !Array.isArray(arr)]
    })
  }
  var result = arr.slice()
  if (!arr[i]) return result
  result[i] = fn(result[i])
  return result
})
