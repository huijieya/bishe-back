import request from '@/utils/request'

export function initTrainProgram(params) {
  return request({
    url: '/trainProgram/page/init',
    method: 'get',
    params
  })
}

export function addTrainProgram(data) {
  return request({
    url: '/trainProgram/add',
    method: 'post',
    data: data,
    headers: { 'Content-Type': 'application/json' }
  })
}

export function deleteTrainProgram(params) {
  return request({
    url: '/trainProgram/delete' + '?id=' + params,
    method: 'delete',
    params
  })
}

export function alterTrainProgram(id, data) {
  return request({
    url: '/trainProgram/alter' + '?id=' + id,
    method: 'post',
    data: data,
    headers: { 'Content-Type': 'application/json' }
  })
}

export function findTrainProgramByGrade(params) {
  return request({
    url: '/trainProgram/findByGrade' + '?grade=' + params,
    method: 'get',
    params
  })
}

export function findTrainProgramById(params) {
  return request({
    url: '/trainProgram/findById' + '?id=' + params,
    method: 'get',
    params
  })
}
