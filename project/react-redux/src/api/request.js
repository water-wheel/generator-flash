function parseJSON(response) {
	return response.json();
}
const stringifyParams = (params) => (

	Object.keys(params).map((key) => (key + '=' + encodeURIComponent(params[key]))).join('&')

);

function checkStatus(response) {
	if(response.status >= 200 && response.status < 300) {
		return response;
	} else if(response.status === 404) {
		return response;
	} else {
		// message.error('出错啦,错误代码：' + response.status);
	}

	const error = new Error(response.statusText);
	error.response = response;
	throw error;
}

function handleData(data) {
	//过滤条件
	return data
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
let params = {};
export default {
	get: function(url, options) {
        let params = "?";
		for(let key in options) {
			if(options[key]){
				params += key + "=" + options[key] + "&";
			}
		}
		return fetch(url + params, {
				method: "get",
				headers: {
					'cache-control': 'no-cache',
		            'referer-url': window.location.href,
		            'Content-Type': 'application/json; charset=utf-8',
		            'Accept': 'application/json'
				},
				credentials: 'include'
			})
			.then(checkStatus)
			.then(parseJSON)
			.then(handleData)
			.catch(err => ({
				err
			}));
	},
	post: function(url, options) {
		return fetch(url, {
				method: "post",
				headers: {
					'cache-control': 'no-cache',
		            'referer-url': window.location.href,
		            'Content-Type': 'application/json; charset=utf-8',
		            'Accept': 'application/json'
				},
				credentials: 'include',
				body: stringifyParams(options)
			})
			.then(checkStatus)
			.then(parseJSON)
			.then(handleData)
			.catch(err => ({
				err
			}));
	},
	setParams: function(data) {
		for(let k in data) {
			params[k] = data[k];
		}
	},
	clearParams: function() {
		params = {};
	},
	getParams: function() {
		return params;
	}
}