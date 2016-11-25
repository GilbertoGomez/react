var CryptoJS  = require('crypto-js');

class MarvelApi {
	constructor (key,priv) {
		this.key = key
		this.priv = priv
		this.baseUrl = 'https://gateway.marvel.com:443/v1/public'
	}

	searchCharacter (name) {
		let ts = new Date().getTime();
		let hash = CryptoJS.MD5(ts + this.priv + this.key ).toString();

		let url = `${this.baseUrl}/characters?name=${name}&apikey=${this.key}&ts=${ts}&hash=${hash}`

		let promesa = new Promise((resolve,reject) => {
			let req = new XMLHttpRequest()
			req.open("GET", url);
			req.onload = function(){
				if (req.status === 200 ) {
						resolve(req.responseText)
				} else {
						reject(new Error(req.statusText))
				}
			}
			req.onerror = function() {
					reject(new Error("Error de Red"))
			}
			req.send();
		})
		return promesa.then(function(data){
			var res = JSON.parse(data)
			return res.data.results[0]
		})		
	}
}
window.MarvelApi = MarvelApi