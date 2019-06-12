import Cookies from 'js-cookie'

function sum(a, b) {
  const c = a + b 
  return c
}

// 会被 tree shaking
function minus(a, b) {
  const c = a - b 
  return c
}

export {
  sum,
  Cookies
}