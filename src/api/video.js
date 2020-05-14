import request from '@/utils/request'

export function videoList(data) {
  return request({
    url: '/video/list',
    method: 'post',
    data: data
  })
}

export function getById(data) {
  return request({
    url: '/video/getById',
    method: 'post',
    data
  })
}

export function updateVideo(id, videoUrl, fileName, fileOperate) {
  return request({
    url: '/video/update' + '?id=' + id + '&&videoUrl=' + videoUrl + '&&fileName=' + fileName + '&&fileOperate=' + fileOperate,
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  })
}

export function insertVideo(videoUrl, fileName, fileOperate) {
  return request({
    url: '/video/insert' + '?videoUrl=' + videoUrl + '&&fileName=' + fileName + '&&fileOperate=' + fileOperate,
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  })
}

export function deleteVideo(params) {
  return request({
    url: 'video/delete' + '?id=' + params,
    method: 'post',
    params
  })
}

// 上传视频未实现
export function uploadFile(data) {
  return request({
    url: '/file/upload',
    method: 'post',
    data
  })
}
