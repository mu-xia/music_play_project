import originJsonp from 'jsonp'



//url:地址，data：
export default function jsonp(url,data,option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);
  //resolve:成功 reject：失败
    return new Promise((resolve,reject)=>{
      //回调函数,data:后端的数据
      originJsonp(url,option,(err,data)=>{
          if(!err){
            resolve(data)
          }else {
            reject(err)
          }
      })

    })
}

export function param(data) {
  let url = '';
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : '';
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}

/*export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}*/

/*export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}*/
