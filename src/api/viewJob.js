import request from '@/utils/request'

// 根据流程Id查询岗位
export function queryJob(id) {
  return request({
    url: '/query/job' + '?flowId=' + id,
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  })
}

// 增加岗位
export function addJob(data) {
  return request({
    url: '/add/job',
    method: 'post',
    data: data,
    headers: { 'Content-Type': 'application/json' }
  })
}

// 删除岗位
export function deleteJob(id) {
  return request({
    url: '/delete/job' + '?jobId=' + id,
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

// 修改岗位
export function alterJob(jobId, liuchengId, data) {
  return request({
    url: '/alter/job' + '?jobId=' + jobId + '?liuchengId=' + liuchengId,
    method: 'post',
    data: data,
    headers: { 'Content-Type': 'application/json' }
  })
}
