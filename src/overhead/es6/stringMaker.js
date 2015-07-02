import _ from 'lodash';

export default function stringMaker(...strings) {
  let result = '';

  //_.each(strings, string => result += string + ' ');
  for (let string of strings) {
    result += string + ' ';
  }

  return result;
}
