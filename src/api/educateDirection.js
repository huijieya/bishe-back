import request from '@/utils/request'

// post
// 获取所有培养方向
export function getEducateDirection(data) {
  return request({
    url: '/get/trainDirection',
    method: 'post',
    data
  })
}

// post+参数在请求头拼接
// 根据Id获取单个培养方向
export function getDirectionById(id) {
  return request({
    url: '/get/direction/byId' + '?id=' + id,
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  })
}

// post+Content-Type
// 新增培养方向
export function insertEducateDirection(data) {
  return request({
    url: '/insert/trainDirection',
    method: 'post',
    data,
    headers: { 'Content-Type': 'application/json' }
  })
}

// 删除培养方向
export function deleteEducateDirection(id) {
  return request({
    url: '/delete/train/direction' + '?id=' + id,
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

// 修改培养方向
export function alterEducateDirection(id, data) {
  return request({
    url: '/alter/train/direction' + '?id=' + id,
    method: 'post',
    data: data,
    headers: { 'Content-Type': 'application/json' }
  })
}

// 培养方向-上传图片
export function uploadFile(data) {
  return request({
    url: '/file/upload',
    method: 'post',
    data
  })
}

// 根据流程id查询相关岗位
export function queryJob(id) {
  return request({
    url: '/query/job' + '?flowId=' + id,
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  })
}
