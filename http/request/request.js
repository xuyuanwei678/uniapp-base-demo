import request from '../axios.js'
import {API_TEST} from '../api/api.js'
console.log('API_TEST',API_TEST)
export const API_TEST_GET = (param)=>{
	console.log('调用成功')
	return request.req({
		url: API_TEST,
		method: 'GET',
		param
	})
}
export const API_TEST_POST = (param)=>{
	console.log('调用成功')
	return request.req({
		url: API_TEST,
		method: 'POST',
		param,
		data:param,
		loading: true,
	})
}