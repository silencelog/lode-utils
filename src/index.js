import * as _Array from './Array'
import * as _Number from './Number'
import * as _String from './String'
import * as Type from './Type'
import * as Url from './Url'

const utils = {
  Array: _Array,
  Number: _Number,
  String: _String,
  Type,
  Url
}

function install (Vue, opts = {}) {
  Vue.prototype[opts.alias || '$u'] = utils
}

export default {
  ...utils,
  install
}
