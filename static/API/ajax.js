/*
* ajax请求模块
* 返回值：promise对象(异步返回的数据是: response.data)
*/
import axios from 'axios'


export default function ajax(url, data = {}, type = 'get') {

	return new Promise(function (resolve, result) {
		//执行异步函数ajax请求
		let promise
		if (type === 'GET') {
			let dataStr = ''
			Object.keys(data).forEach(key => {
				dataStr += key + '=' + data[key] + '&'
			})
			if (dataStr !== '') {
				dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
				url = url + "?" + dataStr
				//发送get请求
				promise = axios.get(url)
			} else {
				promise = axios.post(url.data)
			}
			promise.then(function (response) {
				resolve(response.data)
			}).catch(function (err) {
				reject(error)
			})
		}

		return promise
		//成功调用resolve()
	})


}




