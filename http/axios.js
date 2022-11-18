import cfg from './config'

export default {
	async post(url, param) {
		const res = await this.uni_request(url, param, 'post')
		return res;
	},
	async get(url, param) {
		const res = await this.uni_request(url, param, 'get')
		return res;
	},
	async put(url, param) {
		const res = await this.uni_request(url, param, 'put')
		return res;
	},
	async del(url, param) {
		const res = await this.uni_request(url, param, 'delete')
		return res;
	},
	async req(axios) {
		const res = await this.uni_request(axios)
		return res;
	},
	uni_request(axios, again_quest = false) {
		const that = this
		let {
			url,
			param,
			method,
			data,
			loading,
		} = axios
		let loadingTime
		if(loading){
			//秒响应，100毫秒以内不做loading显示。
			loadingTime = setTimeout(()=> {
				uni.showLoading({
					title: '加载中',
					mask:true,
				});
			}, 100);
		}
		
		if (param) {
			var arr = [];
			for (var p in param)
				if (param.hasOwnProperty(p)) {
					arr.push(encodeURIComponent(p) + "=" + encodeURIComponent(param[p]));
				}
			url = url + '?' + arr.join("&");
		}
		return new Promise((cback, reject) => {
			uni.request({
				url: cfg.Api_url + url,
				data: data,
				param: param,
				method: method,
				header: {
					token: uni.getStorageSync("token"),
					// 'Content-Type': 'multipart/form-data',
				},
			}).then(data => { //data为一个数组，数组第一项为错误信息，第二项为返回数据
				if(loading){
					clearTimeout(loadingTime)
					uni.hideLoading()
				}
				
				var [error, res] = data;
				
				var res_code = res.statusCode.toString();
				if (res_code.charAt(0) == 2) {
					
					if (res.data.success == 'true') {
						cback(res.data);
					} else {
						
						// console.log('201', url)
						if(res.data.code == 200){
							cback(res.data);
						}else{
							if(res.data.errorCode == '010004'){
								// uni.showToast({
								// 	title: '登录过期',
								// 	icon: 'none'
								// })
								
							}else{
								console.error('dddddd')
								uni.showToast({
									title: res.data.msg || res.msg,
									icon: 'none'
								})
							}
						}
						
					}
				} else {
					
					if (res_code == 401) {
						//登录失效
						console.log('401', url)
						uni.removeStorageSync('token')
						reject(res)
					} else {
						console.log('400/500', url, error, res)
						if(res.statusCode == 500){
							console.log('500的错误')
							reject(res)
						}
						if(res.statusCode == 403){
							console.log('token过期')
							uni.removeStorageSync('token')
							reject(res)
							return
						}
						uni.showToast({
							title: res.data.message || '请求异常',
							icon: 'none'
						})
						
					}
				}
			}).catch(err => {
				console.log('catch:', err);
			})
		})
	},

}
