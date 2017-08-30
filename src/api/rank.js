/**
 * Created by zyj on 2017/8/31.
 */
import jsonp from 'common/js/jsonp'
import {commonParams,options} from './config'


export function getToplist() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg';
  /*拼接url，使用es6 assign的语法*/
  const data=Object.assign({},commonParams,{
    platform: 'h5',
    needNewCode: 1
  });
  return jsonp(url, data, options)
}
