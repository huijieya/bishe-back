import request from '@/utils/request'

// 根据流程Id查询流程
export function getProcessById(id) {
  return request({
    url: '/get/process/byId' + '?id=' + id,
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  })
}

// 根据培养方向Id查询开发流程
export function getProcess(id) {
  return request({
    url: '/get/process' + '?trainDirectionId=' + id,
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  })
}

// 增加流程
export function insertProcess(data) {
  return request({
    url: '/insert/process',
    method: 'post',
    data: data,
    headers: { 'Content-Type': 'application/json' }
  })
}

// 删除流程
export function deleteProcess(id) {
  return request({
    url: '/delete/process' + '?id=' + id,
    method: 'post',
    transformRequest: [
      function(data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        ret = ret.substring(0, ret.lastIndexOf('&'))
        return ret
      }
    ],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 修改流程
export function alterProcess(id, data) {
  return request({
    url: '/alter/process' + '?trainDirectionId=' + id,
    method: 'post',
    data: data,
    headers: { 'Content-Type': 'application/json' }
  })
}
