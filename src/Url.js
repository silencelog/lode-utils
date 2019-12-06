/**
 * Pants module.
 * @module Url
 * @see module:Url
 */

/**
 * [formatParams 对象转化成url参数字符串格式]
 * @param  {Object} o [description]
 * @param  {String} j [description]
 * @return {String}      [description]
 */
function formatParams (o, j = '&') {
  let arr = []
  for (let key in o) {
    if (!o[key] && o[key] !== 0) continue
    arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(JSON.stringify(o[key])))
  }
  return arr.join(j)
}

/**
 * [getQueryString 获取参数值]
 * @param  {String} name [参数名]
 * @param  {Object} param [{url:要截取的字符串, reg:结果匹配的正则}]
 * @return {String}      [参数值]
 */
function getQueryString (name, param = {}) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  let result = ''
  let url = ''
  if (!param.url) {
    url = window.location.search ? window.location.search.substr(1) : window.location.href.replace(/.*\?/, '')
  } else {
    url = param.url.replace(/.*\?/, '')
  }
  result = url.match(reg)
  if (result !== null) {
    let value = decodeURIComponent(result[2])
    if (param.reg) {
      let vreg = new RegExp(param.reg)
      let val = value.match(vreg)
      if (val !== null) return val[0]
      return null
    }
    return value
  }
  return null
}

export { formatParams, getQueryString }
