import request from '@/utils/request'

export function getEducateDirection(data) {
  return request({
    url: '/get/trainDirection',
    method: 'post',
    data
  })
}

export function insertEducateDirection(data) {
  return request({
    url: '/insert/trainDirection',
    method: 'post',
    data,
    headers: { 'Content-Type': 'application/json' }
  })
}

export function deleteEducateDirection(data) {
  return request({
    url: '/delete/train/direction',
    method: 'post',
    data
  })
}

export function alterEducateDirection(data) {
  return request({
    url: '/alter/train/direction',
    method: 'post',
    data
  })
}
