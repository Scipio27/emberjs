import { helper } from '@ember/component/helper';

export function arrayContains(params){
  const [ittems, value] = params;
  return ittems.includes(value);
}

export default helper(function arrayContains(params/*, hash*/) {
  return params;
});
