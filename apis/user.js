// import request from '~/plugins/axios';
import request from '~/plugins/request'
import { fn } from 'moment'
export function login(data) {
   return request({
      url: "/api/passport/login",
      method: 'post',
      data
   })
}
export function register(data) {
   return request({
      url: "/api/passport/reg",
      method: 'post',
      data
   })
}
export function getCaptcha(data) {
   return request({
      url: "/api/sms/send",
      method: 'post',
      data
   })
}
export function resetPwd(data) {
   return request({
      url: "/api/passport/resetPasswd",
      method: 'post',
      data
   })
}
export async function config() {
   return request({
      url: '/api/static/config',
      method: "get",
   })
}
export async function getUserDetail() {
   return request({
      url: '/api/user/detail',
      method: "get"
   })
}
export async function getCashList(pageSize = 10, pageNumber = 1) {
   return request({
      url: "/api/account/cash_list",
      method: "get",
      params: { page: pageNumber, num: pageSize }
   })
}
export async function getRebateList(params) {
   let defaultParam = {
      pageSize: 10, pageNumber: 1, type: "1", from_type: "1", time_type: "5",
   }
   let { pageSize, pageNumber, type, from_type, time_type } = { ...defaultParam, ...params }
   return request({
      url: "/api/promote/rebateList",
      method: "get",
      params: { page: pageNumber, num: pageSize, type, from_type, time_type }
   })
}
export async function getStatistics() {
   return request({
      url: "/api/promote/statistics",
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
      url: "/api/promote/material_images",
      method: "get",
      params
   })
}

export async function getQrCode() {
   return request({
      url: "/api/promote/info",
      method: "get",
   })
}
export async function getRandomPromoteText(params) {
   let defaultParams = {
      type: "1",
      promote_type: "2",
      source_type:"1"
   }
   params = { ...defaultParams, ...params }
   return request({
      url: "/api/promote/material_random_content",
      method: "get",
      params
   })
}
export async function drawal(cash_num) {
   return request({
      url:"/api/account/withdrawal",
      method:"post",
      data:{
         cash_num
      }
   })
   
}
export async function getRebateStatic(time_type=1,from_type=1,type=1){
   return request({
      url:"/api/promote/rebateStatistic",
      method:"get",
      params:{
         time_type,
         from_type,
         type
      }
   })
}

export async function getTeamList(type=1,page=1,num=20){
   return request({
      url:"/api/team/list",
      method:"get",
      params:{
         type,page,num
      }
   })
}
export async function getTeamStatistics(type=1){
   return request({
      url:"/api/team/statistics",
      method:"get",
      params:{
         type
      }
   })
}
export async function getUpgradeProgress(){
   return request({
      url:"/api/promote/upgrade_progress",
      method:"get",
   })
}
export async function updateUserInfo(data={wechat:"",ali_account:"",realname:""}){
   return request({
      url:"/api/profile/modify",
      method:"post",
      data
   })
}
export async function visitorGetInviterInfoById(userid){
   return request({
      url:"/api/index/user",
      method:'get',
      params:{
         userid
      }
   })
}
export async function getTaobaoAuthCode(){
   return request({
      url:"/api/promote/inviteCode",
   })
}

export async function checkAuthResult(){
   return request({
      url:"/api/promote/checkAuthResult",
      method:"post"
   })
}
