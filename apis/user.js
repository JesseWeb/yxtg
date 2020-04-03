// import request from '~/plugins/axios';
import request from '~/plugins/request'
import { fn } from 'moment'
export function login(data) {
   return request({
      url: "/passport/login",
      method: 'post',
      data
   })
}
export function register(data) {
   return request({
      url: "/passport/reg",
      method: 'post',
      data
   })
}
export function getCaptcha(data) {
   return request({
      url: "/sms/send",
      method: 'post',
      data
   })
}
export function resetPwd(data) {
   return request({
      url: "/passport/resetPasswd",
      method: 'post',
      data
   })
}
export async function config() {
   return request({
      url: '/static/config',
      method: "get",
   })
}
export async function getUserDetail() {
   return request({
      url: '/user/detail',
      method: "get"
   })
}
export async function getCashList(pageSize = 10, pageNumber = 1) {
   return request({
      url: "/account/cash_list",
      method: "get",
      params: { page: pageNumber, num: pageSize }
   })
}
export async function getRebateList(params) {
   let defaultParam = {
      pageSize: 10, pageNumber: 1, type: "1", form_type: "1", time_type: "5",
   }
   let { pageSize, pageNumber, type, form_type, time_type } = { ...defaultParam, ...params }
   return request({
      url: "/promote/rebateList",
      method: "get",
      params: { page: pageNumber, num: pageSize, type, form_type, time_type }
   })
}
export async function getStatistics() {
   return request({
      url: "/promote/statistics",
      method: "get",
   })
}

export async function getMaterialImages(params) {
   let defaultParams = {
      type: "1",
      promote_type: "2"
   }
   params = { ...defaultParams, ...params }
   return request({
      url: "/promote/material_images",
      method: "get",
      params
   })
}

export async function getQrCode() {
   return request({
      url: "/promote/info",
      method: "get",
   })
}
export async function getRandomPromoteText(params) {
   let defaultParams = {
      type: "1",
      promote_type: "2"
   }
   params = { ...defaultParams, ...params }
   return request({
      url: "/promote/material_random_content",
      method: "get",
      params
   })
}
export async function drawal(cash_num) {
   return request({
      url:"/account/withdrawal",
      method:"post",
      data:{
         cash_num
      }
   })
   
}
export async function getRebateStatic(time_type=1,form_type=1,type=1){
   return request({
      url:"/promote/rebateStatistic",
      method:"get",
      params:{
         time_type,
         form_type,
         type
      }
   })
}

export async function getTeamList(type=1,page=1,num=20){
   return request({
      url:"/team/list",
      method:"get",
      params:{
         type,page,num
      }
   })
}
export async function getTeamStatistics(type=1){
   return request({
      url:"/team/statistics",
      method:"get",
      params:{
         type
      }
   })
}
