import _ from 'lodash'

function request(id, opt, val = opt, callback = val || _.noop) {
  opt = _.isFunction(opt) ? {} : opt;
  val = _.isFunction(val) ? '' : val;

  callback(id, opt, val);
}
