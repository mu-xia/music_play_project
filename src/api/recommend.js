/**
 * 推荐页面的数据
 */
import jsonp from 'common/js/jsonp'
import {commonParams,options} from './config'
import axios from 'axios'

/*封装的获取的jsonp的数据*/
/*轮播图*/
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
  /*拼接url，使用es6 assign的语法*/
  const data=Object.assign({},commonParams,{
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  });
  return jsonp(url, data, options)
}

/*音乐图片*/

export function getDiscList() {
  // const url='https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg';
  const url ="/resapi/qqlist";
  //const url = '/api/getDiscList';

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  /*return jsonp(url, data, options)*/

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
